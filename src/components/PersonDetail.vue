<script>
import AnimationGrid from './AnimationGrid.vue';
import FilmGrid from './FilmGrid.vue';
import StudioLink from './StudioLink.vue';

function addToMeta(films, title, meta) {
  films.forEach((film) => {
    if (meta[film.id]) {
      meta[film.id] += ` / ${title}`;
    } else {
      meta[film.id] = title;
    }
  });
}

export default {
  props: {
    person: Object,
  },
  computed: {
    age() {
      return this.person
        ? this.calculateAge(
            {
              year: this.person.birthYear,
              month: this.person.birthMonth,
              day: this.person.birthDay,
            },
            {
              year: this.person.deathYear || new Date().getFullYear(),
              month: this.person.deathMonth || undefined,
              day: this.person.deathDay || undefined,
            }
          )
        : '?';
    },
    born() {
      return this.person
        ? this.formatDate({
            year: this.person.birthYear,
            month: this.person.birthMonth,
            day: this.person.birthDay,
          })
        : '?';
    },
    died() {
      return this.person
        ? this.formatDate({
            year: this.person.deathYear,
            month: this.person.deathMonth,
            day: this.person.deathDay,
          })
        : '?';
    },
    formattedName() {
      return this.person.alias
        ? this.person.alias
        : `${this.person.firstName} ${this.person.lastName}`;
    },
    hasStudio() {
      return this.person && this.person.founded && this.person.founded.length;
    },
    hasAnimationCredit() {
      return this.person && this.person.animated && this.person.animated.length;
    },
    hasDirectingCredit() {
      return this.person && this.person.directed && this.person.directed.length;
    },
    hasWritingCredit() {
      return this.person && this.person.wrote && this.person.wrote.length;
    },
    hasComposingCredit() {
      return this.person && this.person.composed && this.person.composed.length;
    },
  },
  methods: {
    calculateAge(date1, date2) {
      const yearDiff = Math.floor(date2.year - date1.year);

      if (date2.month && date1.month) {
        if (date1.day && date2.day) {
          if (date2.month >= date1.month && date2.day >= date1.day) return yearDiff;
          return yearDiff - 1;
        }
        if (date2.month >= date1.month) return yearDiff;
        return yearDiff - 1;
      }

      return yearDiff;
    },
    formatDate({ year, month, day }) {
      if (!month || !day) return year;
      return `${year}-${month}-${day}`;
    },
  },
  components: { AnimationGrid, FilmGrid, StudioLink },
};
</script>

<template>
  <div v-if="person" class="ani-persondetail">
    <div class="ani-persondetail-img">
      <img
        v-if="person.image"
        class="ani-persondetail-photo"
        :src="person.image.url"
        :alt="person.image.title"
        width="400"
      />
      <img
        v-if="!person.image && person.animated && person.animated.length"
        loading="lazy"
        class="ani-persondetail-photo"
        :src="person.animated[Math.floor(Math.random()*person.animated.length)].image.url"
      />
    </div>
    <div class="ani-persondetail-details">
      <h1
        class="ani-persondetail-title"
      >{{ formattedName }} {{ !person.alias && person.kanji ? `(${person.kanji})` : '' }}</h1>
      <p>{{ person.description }}</p>
      <div class="ani-persondetail-meta">
        <div class="ani-meta">
          <div v-if="person.alias" class="ani-meta-key">Given Name</div>
          <div v-if="person.alias" class="ani-meta-val">
            {{ person.firstName }} {{ person.lastName }}
            {{ person.kanji ? ` (${person.kanji})` : '' }}
          </div>

          <div v-if="person.birthYear" class="ani-meta-key">Born</div>
          <div v-if="person.birthYear" class="ani-meta-val">{{ born }}</div>

          <div v-if="person.deathYear" class="ani-meta-key">Died</div>
          <div v-if="person.deathYear" class="ani-meta-val">{{ died }}</div>

          <div v-if="person.birthYear" class="ani-meta-key">Age</div>
          <div v-if="person.birthYear" class="ani-meta-val">{{ age }}</div>

          <div class="ani-meta-key">Country</div>
          <div class="ani-meta-val">{{ person.country }}</div>

          <div v-if="hasStudio" class="ani-meta-key">Founded</div>
          <div v-if="hasStudio">
            <StudioLink v-for="studio in person.founded" :key="studio.id" :studio="studio" />
          </div>

          <div v-if="hasAnimationCredit" class="ani-meta-key">Animated</div>
          <div v-if="hasAnimationCredit">
            <AnimationGrid :sequences="person.animated" />
          </div>

          <div v-if="hasDirectingCredit" class="ani-meta-key">Directed</div>
          <div v-if="hasDirectingCredit">
            <FilmGrid :films="person.directed" small />
          </div>

          <div v-if="hasWritingCredit" class="ani-meta-key">Wrote</div>
          <div v-if="hasWritingCredit">
            <FilmGrid :films="person.wrote" small />
          </div>

          <div v-if="hasComposingCredit" class="ani-meta-key">Composed</div>
          <div v-if="hasComposingCredit">
            <FilmGrid :films="person.composed" small />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="ani-persondetail">
    <div class="ani-skeleton--img" />
    <div class="ani-persondetail-details">
      <h1 class="ani-persondetail-title">
        <div class="ani-skeleton">Winsor McCay</div>
      </h1>
    </div>
  </div>
</template>
