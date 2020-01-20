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

  return (
    <Block>
      <Wrapper>
        <FilmGrid films={data ? data.films : undefined} />
      </Wrapper>
    </Block>
  );
};

export default HomePage;
