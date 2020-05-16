<script>
export default {
  props: {
    sequences: Array,
  },
};
</script>

<template>
  <div class="ani-animationgrid">
    <a
      v-for="seq in sequences"
      :key="seq.url"
      :href="seq.url"
      class="ani-animationgrid-item"
      rel="noopener noreferrer"
      target="_blank"
      :data-id="seq.id"
    >
      <img :src="seq.image.url" :alt="seq.image.title" width="300" height="162" />
    </a>
  </div>
</template>
