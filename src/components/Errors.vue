<script>
export default {
  props: {
    errors: Array,
  },
};
</script>

<template>
  <div v-if="Array.isArray(errors)">
    <div v-for="error in errors" :key="error.message">
      {{ error.message }}
    </div>
  </div>
</template>
