import React from 'react';
import Link from 'next/link';

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
    <>
      {data.films.map(({ directors, titleEN, releaseYear, image }) => (
        <div>
          <h1>
            {titleEN} ({releaseYear})
          </h1>
          <img src={image.url} alt={image.name} width="200" />
          Directors:{' '}
          {directors.map(director => (
            <Link href={`/person/${director.id}`}>
              {director.alias || `${director.firstName} ${director.lastName}`}
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}
