<script>
import FilmGrid from './FilmGrid.vue';
import PersonLink from './PersonLink.vue';

export default {
  props: {
    studio: Object,
  },
  computed: {
    hasFounders() {
      return this.studio && this.studio.founders && this.studio.founders.length;
    },
  },
  components: { FilmGrid, PersonLink },
};
</script>

<template>
  <div v-if="studio" class="ani-studiodetail">
    <div class="ani-studiodetail-img">
      <img :src="studio.image.url" :alt="studio.name" width="400" />
    </div>
    <div class="ani-studiodetail-details">
      <h1 class="ani-studiodetail-title">{{ studio.name }}</h1>
      <div class="ani-studiodetail-meta">
        <div class="ani-meta">
          <div v-if="studio.foundedYear" class="ani-meta-key">Founded</div>
          <div v-if="studio.foundedYear" class="ani-meta-val">{{ studio.foundedYear }}</div>

          <div v-if="hasFounders" class="ani-meta-key">Founders</div>
          <div v-if="hasFounders" class="ani-meta-val">
            <PersonLink v-for="person in studio.founders" :key="person.id" :person="person" />
          </div>

          <div v-if="studio.country" class="ani-meta-key">Country</div>
          <div v-if="studio.country" class="ani-meta-val">{{ studio.country }}</div>

          <div v-if="studio.city" class="ani-meta-key">City</div>
          <div v-if="studio.city">{{ studio.city }}</div>
        </div>
      </div>
    </div>
    <div class="ani-studiodetail-films">
      <h2 class="ani-studiodetail-subtitle">Films</h2>
      <FilmGrid :films="studio.films" />
    </div>
  </div>
  <div v-else class="ani-studiodetail">
    <SkeletonImg />
    <div class="ani-studiodetail-details">
      <h1 class="ani-studiodetail-title">
        <div class="ani-skeleton">Studio Ghibli</div>
      </h1>
    </div>
    <div class="ani-studiodetail-films">
      <h2 class="ani-studiodetail-subtitle">
        <div class="ani-skeleton">Films</div>
      </h2>
      <FilmGrid />
    </div>
  </div>
</template>
