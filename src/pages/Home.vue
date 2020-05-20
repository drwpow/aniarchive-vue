<script>
import Errors from '../components/Errors.vue';
import FilmGrid from '../components/FilmGrid.vue';
import gqlFetch from '../utils/gql-fetch.js';

// minified with https://codepen.io/dangodev/pen/Baoqmoy
const query =
  'query allFilms{films(orderBy:{releaseYear:desc}){animationSequences{id}id title titleEN releaseYear image{title url}studio{name}}}';

export default {
  data() {
    return {
      dropdownStudios: false,
      dropdownYears: false,
      errors: undefined,
      films: undefined,
      search: '',
      selectedStudios: [],
      yearEnd: new Date().getFullYear(),
      yearStart: 1900,
    };
  },
  computed: {
    filteredFilms() {
      if (!this.films) return undefined;
      let filteredFilms = [...this.films];
      // 1. filter studios
      if (this.selectedStudios.length && this.selectedStudios.length !== this.studios) {
        filteredFilms = filteredFilms.filter(({ studio: { name } }) => this.selectedStudios.includes(name));
      }
      // 2. filter years
      if (this.yearStart > 0 && this.yearEnd > 0) {
        filteredFilms = filteredFilms.filter(({ releaseYear }) => releaseYear >= this.yearStart && releaseYear <= this.yearEnd);
      }
      // 3. filter title (if present)
      if (!this.search) return filteredFilms
      const lower = this.search.toLowerCase();
      return filteredFilms.filter(({ titleJP, titleEN }) => `${titleJP}|||${titleEN}`.toLocaleLowerCase().includes(lower))  ;
    },
    studios()  {
      if (!this.films) return [];
      const studios = [];
      this.films.forEach(film => {
        if (studios.findIndex(({ name }) => name === film.studio.name) === -1) {
          studios.push(film.studio);
        }
      })
      studios.sort((a, b) => a.name.localeCompare(b.name));
      return studios;
    }
  },
  created() {
    this.load();
  },
  methods: {
    closeDropdowns() {
      this.dropdownStudios = false;
      this.dropdownYears = false;
    },
    load() {
      gqlFetch({ query }).then(({ data, errors }) => {
        if (errors) this.errors = errors;
        if (data && data.films) this.films = data.films;
      });
    },
    toggleStudios() {
      this.dropdownStudios = !this.dropdownStudios;
    },
    toggleYears() {
      this.dropdownYears = !this.dropdownYears;
    }
  },
  components: { Errors, FilmGrid },
};
</script>

<template>
  <div>
    <main rel="main" class="ani-block">
      <section class="ani-wrapper">
        <header class="ani-filter ani-unigrid">
          <div
            class="ani-filter-overlay"
            :data-visible="(dropdownYears || dropdownStudios) || undefined"
            @click="closeDropdowns"
          ></div>
          <input
            class="ani-filter-title"
            type="search"
            autocapitalize="off"
            placeholder="Search by title"
            v-model="search"
          />
          <menu class="ani-filter-dropdown">
            <button
              :aria-expanded="dropdownYears || undefined"
              aria-controls="dropdown-years"
              type="button"
              class="ani-filter-expand"
              @click="toggleYears"
            >Years</button>
            <div
              id="dropdown-years"
              :aria-hidden="!dropdownYears || undefined"
              class="ani-filter-years"
            >
              <label class="ani-input">
                From
                <input
                  type="text"
                  inputmode="decimal"
                  pattern="\d+(\.\d*)?"
                  v-model.number="yearStart"
                />
              </label>
              <label class="ani-input">
                To
                <input
                  type="text"
                  inputmode="decimal"
                  pattern="\d+(\.\d*)?"
                  v-model.number="yearEnd"
                />
              </label>
            </div>
          </menu>
          <menu class="ani-filter-dropdown">
            <button
              :aria-expanded="dropdownStudios || undefined"
              aria-controls="dropdown-studios"
              type="button"
              class="ani-filter-expand"
              @click="toggleStudios"
            >Studios</button>
            <fieldset
              id="dropdown-studios"
              :aria-hidden="!dropdownStudios || undefined"
              class="ani-filter-studios"
            >
              <label v-for="studio in studios" :key="studio.name" class="ani-checkbox">
                <input type="checkbox" :value="studio.name" v-model="selectedStudios" />
                {{ studio.name }}
              </label>
            </fieldset>
          </menu>
        </header>
        <Errors :errors="errors" />
        <FilmGrid :films="filteredFilms" />
      </section>
    </main>
    <footer class="ani-block">
      <nav class="ani-wrapper tac">
        <router-link to="/about">About</router-link>
      </nav>
    </footer>
  </div>
</template>
