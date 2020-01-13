import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { OnePersonQuery, OnePersonQueryVariables } from '../../types/graphql';
import useGql from '../../hooks/use-gql';
import query from '../../graphql/one-person.graphql';

export default function PersonPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  const { data } = useGql<OnePersonQuery, OnePersonQueryVariables>({
    url: 'http://localhost:4000',
    query,
    variables: { id: `${id}` },
  });

  if (!data || !data.person) {
    return 'Loading…';
  }

  const { alias, firstName, image, lastName, kanji, directed, composed } = data.person;

  return (
    <>
      <h1>
        {alias || `${firstName} ${lastName}`} {(kanji && `(${kanji})`) || null}
      </h1>
      {image && <img width="300" src={image.url} alt={image.name} />}
      <br />
      Directed:{' '}
      {directed.map(film => (
        <Link href={`/film/${film.id}`}>{film.titleEN}</Link>
      ))}
      <br />
      Composed:{' '}
      {composed.map(film => (
        <Link href={`/film/${film.id}`}>{film.titleEN}</Link>
      ))}
    </>
  );
}
