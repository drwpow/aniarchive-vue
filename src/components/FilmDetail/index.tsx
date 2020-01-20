import * as preact from '/web_modules/preact.js';
import { Link } from '/web_modules/preact-router.js';

import SkeletonText from '../SkeletonText/index.js';
import SkeletonImg from '../SkeletonImg/index.js';
import { OneFilmQuery } from '../../types/graphql';

interface FilmDetailProps {
  film?: OneFilmQuery['film'];
}

const formatPerson = (person: OneFilmQuery['film']['directors'][0]) => (
  <Link key={person.id} activeClassName="is-active" href={`/person/${person.id}`}>
    {person.alias ? person.alias : `${person.firstName} ${person.lastName}`}
  </Link>
);

const FilmDetail: preact.FunctionComponent<FilmDetailProps> = ({ film }) => {
  if (film) {
    return (
      <div className="filmDetail">
        <img className="filmDetail-img" src={film.image.url} alt={film.title} width="400" />
        <div className="filmDetail-details">
          <h1 className="filmDetail-title">
            {film.title}
            <br />
            {film.titleEN}
          </h1>
          {film.releaseYear}
          {Array.isArray(film.directors) &&
            film.directors.length > 0 && [
              <h2 className="filmDetail-subtitle">Directors</h2>,
              film.directors.map(formatPerson),
            ]}
          {Array.isArray(film.animators) &&
            film.animators.length > 0 && [
              <h2 className="filmDetail-subtitle">Animators</h2>,
              film.animators.map(formatPerson),
            ]}
          {Array.isArray(film.composers) &&
            film.composers.length > 0 && [
              <h2 className="filmDetail-subtitle">Composers</h2>,
              film.composers.map(formatPerson),
            ]}
          {Array.isArray(film.releases) && film.releases.length > 0 && (
            <div>
              <h2 className="filmDetail-subtitle">Releases</h2>
              <div>
                {film.releases.map(release => (
                  <div>
                    <div>{release.country}</div>
                    <div>
                      {release.releaseYear}-{release.releaseMonth}-{release.releaseDay}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="filmDetail">
      <SkeletonImg />
      <div className="filmDetail-details">
        <h1 className="filmDetail-title">
          <SkeletonText>This movie is loading</SkeletonText>
        </h1>
        <SkeletonText>2020</SkeletonText>
      </div>
    </div>
  );
};

export default FilmDetail;
