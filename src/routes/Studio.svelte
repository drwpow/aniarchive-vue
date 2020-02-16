<script>
  import Block from '../components/Block.svelte';
  import StudioDetail from '../components/StudioDetail.svelte';
  import NavBack from '../components/NavBack.svelte';
  import Wrapper from '../components/Wrapper.svelte';
  import { GRAPHQL_URL } from '../lib/constants.js';
  import fetchGQL from '../lib/gql.js';
  import query from '../graphql/one-studio.graphql.js';

  // props
  export let id;

  // state
  const resp = fetchGQL({ url: GRAPHQL_URL, query, variables: { id } });
</script>

<Block>
  <Wrapper>
    <NavBack />
    <StudioDetail studio={resp && resp.data ? resp.data.studio : undefined} />
  </Wrapper>
</Block>
