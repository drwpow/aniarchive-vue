import * as preact from '/web_modules/preact.js';

import Block from '../components/Block/index.js';
import FilmDetail from '../components/FilmDetail/index.js';
import NavBack from '../components/NavBack/index.js';
import Wrapper from '../components/Wrapper/index.js';
import { GRAPHQL_URL } from '../lib/constants.js';
import { OneFilmQuery, OneFilmQueryVariables } from '../types/graphql';
import useGql from '../hooks/use-gql.js';
import query from '../graphql/one-film.graphql.js';

interface FilmPageProps {
  id?: string;
}

const FilmPage: preact.FunctionComponent<FilmPageProps> = ({ id }) => {
  const { data } = useGql<OneFilmQuery, OneFilmQueryVariables>({
    url: GRAPHQL_URL,
    query,
    variables: { id },
  });

  return (
    <Block>
      <Wrapper>
        <NavBack />
        <FilmDetail film={data ? data.film : undefined} />
      </Wrapper>
    </Block>
  );
};

export default FilmPage;
