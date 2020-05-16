<script>
import PersonLink from './PersonLink.vue'

export default {
  props: {
    sequences: Array,
  },
  components: { PersonLink}
};
</script>

<template>
  <div class="ani-animationgrid">
    <div v-for="seq in sequences" :key="seq.url" class="ani-animationgrid-item">
      <a
        :href="seq.url"
        class="ani-animationgrid-link"
        rel="noopener noreferrer"
        target="_blank"
        :data-id="seq.id"
      >
        <img
          class="ani-animationgrid-img"
          loading="lazy"
          :src="seq.image.url"
          :alt="seq.image.title"
          width="300"
          height="162"
        />
      </a>
      <div v-if="seq.artists && seq.artists.length" class="ani-animationgrid-artists">
        <PersonLink v-for="person in seq.artists" :key="person.id" :person="person" small="true" />
      </div>
    </div>
  </div>
</template>
