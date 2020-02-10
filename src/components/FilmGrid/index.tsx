import * as preact from '/web_modules/preact.js';

import FilmCard from '../FilmCard/index.js';
import { AllFilmsQuery } from '../../types/graphql';

interface FilmGridProps {
  films?: AllFilmsQuery['films'];
  meta?: { [key: string]: string };
}

const FilmGrid: preact.FunctionComponent<FilmGridProps> = ({ films, meta }) => {
  if (films) {
    return (
      <div className="filmGrid">
        {films.map(film => (
          <FilmCard
            key={film.id}
            id={film.id}
            image={film.image.url}
            meta={meta && meta[film.id]}
            releaseYear={film.releaseYear}
            title={film.title}
            titleEN={film.titleEN}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="filmGrid">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => (
        <FilmCard
          key={n}
          releaseYear={1914}
          skeleton
          id="gertie-the-dinosaur"
          image="gertie.jpg"
          title="Gertie the Dinosaur"
          titleEN="Gertie the Dinosaur"
        />
      ))}
    </div>
  );
};

export default FilmGrid;
