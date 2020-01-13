import React from 'react';
import Link from 'next/link';

import { AllFilmsQuery } from '../../types/graphql';
import './styles.css';

interface FilmCardProps {
  directors: AllFilmsQuery['films'][0]['directors'];
  id: string;
  image?: string;
  releaseYear: number;
  studio?: string;
  title: string;
  titleEN: string;
}

const FilmCard: React.FunctionComponent<FilmCardProps> = ({
  directors,
  id,
  image,
  releaseYear,
  studio,
  title,
  titleEN,
}) => (
  <Link href={`/film/${id}`}>
    <a className="filmCard">
      <img className="filmCard-img" alt={title} src={image} height="425" width="300" />
      <h3 className="filmCard-title">
        {title}
        {titleEN !== title && [<br />, titleEN]}
        <small>
          {directors.map(
            director => director.alias || `${director.firstName} ${director.lastName}`
          )}
          {studio && [' / ', studio]}
        </small>
      </h3>
      <div className="filmCard-year">{releaseYear}</div>
    </a>
  </Link>
);

export default FilmCard;
