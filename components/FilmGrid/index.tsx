import React from 'react';

import FilmCard from '../FilmCard';
import { AllFilmsQuery } from '../../types/graphql';

import './styles.css';

interface FilmGridProps {
  films: AllFilmsQuery['films'];
}

const FilmGrid: React.FunctionComponent<FilmGridProps> = ({ films }) => (
  <div className="filmGrid">
    {films.map(film => (
      <FilmCard
        key={film.id}
        directors={film.directors}
        id={film.id}
        image={film.image.url}
        releaseYear={film.releaseYear}
        studio={film.studio.name}
        title={film.title}
        titleEN={film.titleEN}
      />
    ))}
  </div>
);

export default FilmGrid;
