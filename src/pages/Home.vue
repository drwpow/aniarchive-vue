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
      errors: undefined,
      films: undefined,
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      gqlFetch({ query }).then(({ data, errors }) => {
        if (errors) this.errors = errors;
        if (data && data.films) this.films = data.films;
      });
    },
  },
  components: { Errors, FilmGrid },
};
</script>

<template>
  <main rel="main" class="ani-block">
    <section class="ani-wrapper">
      <Errors :errors="errors" />
      <FilmGrid :films="films" />
    </section>
  </main>
</template>
