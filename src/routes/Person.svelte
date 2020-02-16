<script>
  import Block from '../components/Block.svelte';
  import PersonDetail from '../components/PersonDetail.svelte';
  import NavBack from '../components/NavBack.svelte';
  import Wrapper from '../components/Wrapper.svelte';
  import { GRAPHQL_URL } from '../lib/constants.js';
  import fetchGQL from '../lib/gql.js';
  import query from '../graphql/one-person.graphql.js';

  // props
  export let id;

  // state
  const resp = fetchGQL({ url: GRAPHQL_URL, query, variables: { id } });
</script>

<Block>
  <Wrapper>
    <NavBack />
    <PersonDetail person={resp && resp.data ? resp.data.person : undefined} />
  </Wrapper>
</Block>
