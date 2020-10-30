<script>
import FilmGrid from './FilmGrid.vue';
import PersonLink from './PersonLink.vue';
import styles from './StudioDetail.module.scss';

export default {
  props: {
    studio: Object,
  },
  data() {
    return { styles };
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
  <div>
    <div v-if="studio">
      <div class="ani-unigrid">
        <div :class="styles.img">
          <img :src="studio.image.url" :alt="studio.name" width="400" />
        </div>
        <div :class="styles.details">
          <h1 class="mt0 mb2">{{ studio.name }}</h1>
          <div>
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
      </div>

      <h2 class="mt2 mb2">Films</h2>
      <FilmGrid :films="studio.films" />
    </div>
    <div v-else>
      <div class="ani-unigrid">
        <div :class="{ [styles.img]: true, 'ani-skeleton--img': true }"></div>
        <div :class="styles.details">
          <h1>
            <div class="ani-skeleton">Studio Ghibli</div>
          </h1>
        </div>
      </div>
      <h2 class="mt2 mb2">
        <div class="ani-skeleton">Films</div>
      </h2>
      <FilmGrid />
    </div>
  </div>
</template>
