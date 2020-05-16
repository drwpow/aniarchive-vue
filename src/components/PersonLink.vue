<script>
export default {
  props: {
    person: Object,
  },
};
</script>
<template>
  <router-link v-if="person" class="ani-imagelink" :to="`/person/${person.id}`">
    <div class="ani-imagelink-crop">
      <img class="ani-imagelink-img" :src="person.image.url" :alt="person.image.title" />
    </div>
    {{ person.alias ? person.alias : `${person.firstName} ${person.lastName}` }}
  </router-link>
</template>
