<script>
import Errors from '../components/Errors.vue';
import NavBack from '../components/NavBack.vue';
import StudioDetail from '../components/StudioDetail.vue';
import gqlFetch from '../utils/gql-fetch';

// minified with https://codepen.io/dangodev/pen/Baoqmoy
const query =
  'query oneStudio($id:String){studio(where:{id:$id}){id name foundedYear country city founders{id firstName lastName alias image{title url}}image{title url}films(orderBy:{releaseYear:asc}){id title titleEN releaseYear image{title url}studio{name}}}}';

export default {
  data() {
    return {
      errors: undefined,
      studio: undefined,
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      gqlFetch({ query, variables: { id: this.$route.params.id } }).then(({ data, errors }) => {
        if (errors) this.errors = errors;
        if (data && data.studio) this.studio = data.studio;
      });
    },
  },
  components: { Errors, NavBack, StudioDetail },
};
</script>

<template>
  <main rel="main" class="ani-block">
    <section class="ani-wrapper">
      <Errors :error="errors" />
      <NavBack />
      <StudioDetail :studio="studio" />
    </section>
  </main>
</template>
