<script>
import Errors from '../components/Errors.vue';
import FilmDetail from '../components/FilmDetail.vue';
import NavBack from '../components/NavBack.vue';
import gqlFetch from '../utils/gql-fetch.js';

// minified with https://codepen.io/dangodev/pen/Baoqmoy
const query =
  'query oneFilm($id:String){film(where:{id:$id}){title titleEN image{url}releaseYear studio{id name image{title url}}directors{id lastName firstName alias image{title url}}writers{id lastName firstName alias image{title url}}composers{id lastName firstName alias image{title url}}animationSequences{artists{id firstName lastName alias image{title url}}id image{title url}url}releases{country images{url}notes releaseDay releaseMonth releaseYear}}}';

export default {
  data() {
    return {
      errors: undefined,
      film: undefined,
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      gqlFetch({ query, variables: { id: this.$route.params.id } }).then(({ data, errors }) => {
        if (errors) this.errors = errors;
        if (data && data.film) this.film = data.film;
      });
    },
  },
  components: { Errors, NavBack, FilmDetail },
};
</script>

<template>
  <main class="ani-block">
    <section class="ani-wrapper">
      <NavBack />
      <Errors :errors="errors" />
      <FilmDetail :film="film" />
    </section>
  </main>
</template>
