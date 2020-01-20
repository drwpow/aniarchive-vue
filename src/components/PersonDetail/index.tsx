import * as preact from '/web_modules/preact.js';
import { Link } from '/web_modules/preact-router.js';

import SkeletonText from '../SkeletonText/index.js';
import SkeletonImg from '../SkeletonImg/index.js';
import { OnePersonQuery } from '../../types/graphql';
import { age, formatDate } from '../../utils/date.js';

interface FilmDetailProps {
  person?: OnePersonQuery['person'];
}

const formatName = (person: OnePersonQuery['person']) =>
  person.alias ? person.alias : `${person.firstName} ${person.lastName}`;

const formatFilm = (film: OnePersonQuery['person']['directed'][0]) => (
  <Link activeClassName="is-active" className="personDetail-film" href={`/film/${film.id}`}>
    <img className="personDetail-film-img" src={film.image.url} alt={film.image.name} />
    <div className="personDetail-film-name">
      {film.title}
      {film.titleEN !== film.title && [<br />, film.titleEN]}
      <br />
      {film.releaseYear}
    </div>
  </Link>
);

const PersonDetail: preact.FunctionComponent<FilmDetailProps> = ({ person }) => {
  if (person) {
    const name = formatName(person);

    return (
      <div className="personDetail">
        <img className="personDetail-img" src={person.image.url} alt={name} width="400" />
        <div className="personDetail-details">
          <h1 className="personDetail-title">{name}</h1>
          <p>{person.description}</p>
          <dl className="personDetail-stats">
            {person.birthYear && [
              <dt>Born</dt>,
              <dd>
                {formatDate({
                  year: person.birthYear,
                  month: person.birthMonth,
                  day: person.birthDay,
                })}
              </dd>,
              <dt>Age</dt>,
              <dd>
                {age(
                  { year: person.birthYear, month: person.birthMonth, day: person.birthDay },
                  {
                    year: person.deathYear || new Date().getFullYear(),
                    month: person.deathMonth || undefined,
                    day: person.deathDay || undefined,
                  }
                )}
              </dd>,
            ]}
            {person.deathYear && [
              <dt>Dead</dt>,
              <dd>
                {formatDate({
                  year: person.deathYear,
                  month: person.deathMonth,
                  day: person.deathDay,
                })}
              </dd>,
            ]}
          </dl>
          {Array.isArray(person.directed) &&
            person.directed.length > 0 && [
              <h2 className="personDetail-subtitle">Directed</h2>,
              person.directed.map(formatFilm),
            ]}
          {Array.isArray(person.animated) &&
            person.animated.length > 0 && [
              <h2 className="personDetail-subtitle">Animated</h2>,
              person.animated.map(formatFilm),
            ]}
          {Array.isArray(person.composed) &&
            person.composed.length > 0 && [
              <h2 className="personDetail-subtitle">Composed</h2>,
              person.composed.map(formatFilm),
            ]}
        </div>
      </div>
    );
  }
  return (
    <div className="personDetail">
      <SkeletonImg />
      <div className="personDetail-details">
        <h1 className="personDetail-title">
          <SkeletonText>Winsor McCay</SkeletonText>
        </h1>
      </div>
    </div>
  );
};

export default PersonDetail;
