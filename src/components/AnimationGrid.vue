<script>
import styles from './AnimationGrid.module.scss';
import PersonLink from './PersonLink.vue'

export default {
  props: {
    sequences: Array,
  },
  data() {
    return {
      styles
    }
  },
  components: {PersonLink}
};
</script>

<template>
  <div :class="styles.animationgrid">
    <div v-for="seq in sequences" :key="seq.url" :class="styles['animationgrid-item']">
      <a
        :href="seq.url"
        :class="styles['animationgrid-link']"
        rel="noopener noreferrer"
        target="_blank"
        :data-id="seq.id"
      >
        <img
          :class="styles['animationgrid-img']"
          loading="lazy"
          :src="seq.image.url"
          :alt="seq.image.title"
          width="300"
          height="162"
        />
      </a>
      <div v-if="seq.artists && seq.artists.length" :class="styles['animationgrid-artists']">
        <PersonLink v-for="person in seq.artists" :key="person.id" :person="person" small="true" />
      </div>
    </div>
  </div>
</template>
