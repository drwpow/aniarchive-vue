import * as preact from '/web_modules/preact.js';

import Block from '../components/Block/index.js';
import FilmGrid from '../components/FilmGrid/index.js';
import Wrapper from '../components/Wrapper/index.js';
import { GRAPHQL_URL } from '../lib/constants.js';
import { AllFilmsQuery, AllFilmsQueryVariables } from '../types/graphql';
import useGql from '../hooks/use-gql.js';
import query from '../graphql/all-films.graphql.js';

const HomePage: preact.FunctionComponent<{}> = () => {
  const { data } = useGql<AllFilmsQuery, AllFilmsQueryVariables>({
    url: GRAPHQL_URL,
    query,
    variables: {},
  });

  const meta: { [key: string]: string } = data
    ? data.films.reduce((metaObj, film) => ({ ...metaObj, [film.id]: film.studio.name }), {})
    : {};

  return (
    <Block>
      <Wrapper>
        <FilmGrid films={data ? data.films : undefined} meta={meta} />
      </Wrapper>
    </Block>
  );
};

export default HomePage;
