import * as preact from '/web_modules/preact.js';

import Block from '../components/Block/index.js';
import PersonDetail from '../components/PersonDetail/index.js';
import NavBack from '../components/NavBack/index.js';
import Wrapper from '../components/Wrapper/index.js';
import { GRAPHQL_URL } from '../lib/constants.js';
import { OnePersonQuery, OnePersonQueryVariables } from '../types/graphql';
import useGql from '../hooks/use-gql.js';
import query from '../graphql/one-person.graphql.js';

interface PersonPageProps {
  id?: string;
}

const PersonPage: preact.FunctionComponent<PersonPageProps> = ({ id }) => {
  const { data } = useGql<OnePersonQuery, OnePersonQueryVariables>({
    url: GRAPHQL_URL,
    query,
    variables: { id },
  });

  return (
    <Block>
      <Wrapper>
        <NavBack />
        <PersonDetail person={data ? data.person : undefined} />
      </Wrapper>
    </Block>
  );
};

export default PersonPage;
