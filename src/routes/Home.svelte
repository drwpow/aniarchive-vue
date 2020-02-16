<script>
  import Block from '../components/Block.svelte';
  import FilmGrid from '../components/FilmGrid.svelte';
  import Wrapper from '../components/Wrapper.svelte';

  import { GRAPHQL_URL } from '../lib/constants.js';
  import fetchGQL from '../lib/gql.js';
  import query from '../graphql/all-films.graphql.js';

  // state
  const resp = fetchGQL({ url: GRAPHQL_URL, query, variables: {} });
  const meta =
    resp && resp.data
      ? resp.data.films.reduce((metaObj, film) => ({ ...metaObj, [film.id]: film.studio.name }), {})
      : {};
</script>

<Block>
  <Wrapper>
    <FilmGrid films={resp && resp.data ? resp.data.films : undefined} {meta} />
  </Wrapper>
</Block>
