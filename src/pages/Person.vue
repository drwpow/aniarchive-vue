<script>
import Errors from '../components/Errors.vue';
import NavBack from '../components/NavBack.vue';
import PersonDetail from '../components/PersonDetail.vue';
import gqlFetch from '../utils/gql-fetch';

// minified with https://codepen.io/dangodev/pen/Baoqmoy
const query =
  'query onePerson($id:String){person(where:{id:$id}){lastName firstName kanji alias birthDay birthMonth birthYear deathDay deathMonth deathYear description country image{copyright title url}founded{id name image{title url}}directed(orderBy:{releaseYear:asc}){id title titleEN releaseYear image{title url}studio{name}}wrote(orderBy:{releaseYear:asc}){id title titleEN releaseYear image{title url}studio{name}}composed(orderBy:{releaseYear:asc}){id title titleEN releaseYear image{title url}studio{name}}animated{id film{id image{title url}releaseYear title titleEN}image{title url}url}}}';

export default {
  data() {
    return {
      person: undefined,
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      gqlFetch({ query, variables: { id: this.$route.params.id } }).then(({ data, errors }) => {
        if (errors) this.errors = errors;
        if (data && data.person) this.person = data.person;
      });
    },
  },
  components: { Errors, NavBack, PersonDetail },
};
</script>

<template>
  <main rel="main" class="ani-block">
    <section class="ani-wrapper">
      <Errors :errors="errors" />
      <NavBack />
      <PersonDetail :person="person" />
    </section>
  </main>
</template>
