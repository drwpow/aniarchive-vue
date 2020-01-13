import React from 'react';

import Block from '../components/Block';
import FilmGrid from '../components/FilmGrid';
import Wrapper from '../components/Wrapper';
import { AllFilmsQuery, AllFilmsQueryVariables } from '../types/graphql';
import useGql from '../hooks/use-gql';
import query from '../graphql/all-films.graphql';

export default function HomePage() {
  const { data } = useGql<AllFilmsQuery, AllFilmsQueryVariables>({
    url: 'http://localhost:4000',
    query,
    variables: {},
  });

  if (!data) {
    return 'Loading…';
  }

  return (
    <Block>
      <Wrapper>
        <FilmGrid films={data.films} />
      </Wrapper>
    </Block>
  );
}
