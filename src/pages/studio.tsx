import * as preact from '/web_modules/preact.js';

import Block from '../components/Block/index.js';
import StudioDetail from '../components/StudioDetail/index.js';
import NavBack from '../components/NavBack/index.js';
import Wrapper from '../components/Wrapper/index.js';
import { GRAPHQL_URL } from '../lib/constants.js';
import { OneStudioQuery, OneStudioQueryVariables } from '../types/graphql';
import useGql from '../hooks/use-gql.js';
import query from '../graphql/one-studio.graphql.js';

interface StudioPageProps {
  id?: string;
}

const StudioPage: preact.FunctionComponent<StudioPageProps> = ({ id }) => {
  const { data } = useGql<OneStudioQuery, OneStudioQueryVariables>({
    url: GRAPHQL_URL,
    query,
    variables: { id },
  });

  return (
    <Block>
      <Wrapper>
        <NavBack />
        <StudioDetail studio={data ? data.studio : undefined} />
      </Wrapper>
    </Block>
  );
};

export default StudioPage;
