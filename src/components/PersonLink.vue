<script>
export default {
  props: {
    person: Object,
    small: Boolean,
  },
  computed: {
    displayName() {
      return this.person.alias || `${this.person.firstName} ${this.person.lastName}`
    },
    initials() {
      if (this.person.kanji) {
        return this.person.kanji;
      }
      if (this.person.alias) {
        [one, two] = this.person.alias.split(' ');
        return `${one[0]}${two ? two[0] : ''}`
      }
      return `${this.person.firstName[0]}${this.person.lastName[0]}`
    }
  }
};
</script>
<template>
  <router-link
    v-if="person"
    class="ani-imagelink"
    :to="`/person/${person.id}`"
    :data-small="small || undefined"
  >
    <div class="ani-imagelink-crop" :data-placeholder="!person.image || undefined">
      <img
        v-if="person.image"
        class="ani-imagelink-img"
        loading="lazy"
        :src="person.image.url"
        :alt="person.image.title"
      />
      <div v-else class="ani-imagelink-initials">{{ initials }}</div>
    </div>
    {{ displayName }}
  </router-link>
</template>
