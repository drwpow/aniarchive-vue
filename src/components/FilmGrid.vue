<script>
export default {
  props: {
    films: Array,
    small: Boolean,
  },
  data() {
    return {
      placeholders: Array.from(new Array(15)),
    };
  },
};
</script>

<template>
  <div>
    <!-- Loaded -->
    <div v-if="films" class="ani-unigrid" :data-small="small || undefined">
      <router-link
        v-for="{ animationSequences, title, titleEN, id, image, releaseYear } in films"
        :key="id"
        :to="`/film/${id}`"
        class="ani-filmgrid-card"
        :data-count="(animationSequences && animationSequences.length) || undefined"
      >
        <div class="ani-filmgrid-crop">
          <img
            class="ani-filmgrid-img"
            loading="lazy"
            :alt="title"
            :src="image.url"
            height="270"
            width="410"
          />
        </div>
        <h3 class="ani-filmgrid-title">{{ titleEN }}</h3>
        <div class="ani-filmgrid-year">{{ releaseYear }}</div>
      </router-link>
    </div>
    <!-- 💀 Skeleton -->
    <div v-if="!films" class="ani-unigrid" data-skeleton>
      <div v-for="(_, i) in placeholders" :key="i" class="ani-filmgrid-card">
        <div class="ani-filmgrid-img">
          <div class="ani-skeleton--img" />
        </div>
        <h3 class="ani-filmgrid-title">
          <div class="ani-skeleton">Gertie the Dinosaur</div>
          <small>
            <div class="ani-skeleton">Gertie the Dinosaur</div>
          </small>
        </h3>
        <div class="ani-filmgrid-year">
          <div class="ani-skeleton">1914</div>
        </div>
      </div>
    </div>
  </div>
</template>
