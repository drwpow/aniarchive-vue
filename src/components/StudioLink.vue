<script>
export default {
  props: {
    studio: Object,
  },
};
</script>
<template>
  <router-link v-if="studio" class="ani-imagelink" :to="`/studio/${studio.id}`">
    <div class="ani-imagelink-crop">
      <img class="ani-imagelink-img" :src="studio.image.url" :alt="studio.image.title" />
    </div>
    {{ studio.name }}
  </router-link>
</template>
