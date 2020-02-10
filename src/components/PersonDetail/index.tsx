import * as preact from '/web_modules/preact.js';

import FilmGrid from '../FilmGrid/index.js';
import { MetaTable, MetaKey, MetaValue } from '../MetaTable/index.js';
import SkeletonText from '../SkeletonText/index.js';
import SkeletonImg from '../SkeletonImg/index.js';
import { OnePersonQuery } from '../../types/graphql';
import { age, formatDate } from '../../utils/date.js';
import StudioLink from '../StudioLink/index.js';

interface PersonDetailProps {
  person?: OnePersonQuery['person'];
}

const formatName = (person: OnePersonQuery['person']) =>
  person.alias ? person.alias : `${person.firstName} ${person.lastName}`;

/* eslint-disable no-param-reassign */
function addToMeta(
  films: OnePersonQuery['person']['directed'],
  title: string,
  meta: { [key: string]: string }
) {
  films.forEach(film => {
    if (meta[film.id]) {
      meta[film.id] += ` / ${title}`;
    } else {
      meta[film.id] = title;
    }
  });
}
/* eslint-enable no-param-reassign */

const PersonDetail: preact.FunctionComponent<PersonDetailProps> = ({ person }) => {
  if (person) {
    const name = formatName(person);
    const filmMeta: { [key: string]: string } = {};
    addToMeta(person.directed, 'Director', filmMeta);
    addToMeta(person.wrote, 'Writer', filmMeta);
    addToMeta(person.composed, 'Composer', filmMeta);
    let films = [...person.directed, ...person.wrote, ...person.composed];
    films = films.filter(({ id }, i) => films.findIndex(film => film.id === id) === i);
    films.sort((a, b) => a.releaseYear - b.releaseYear);

    return (
      <div className="personDetail">
        <div className="personDetail-img">
          <img src={person.image.url} alt={person.image.title} width="400" />
        </div>
        <div className="personDetail-details">
          <h1 className="personDetail-title">
            {name} {!person.alias && person.kanji && `(${person.kanji})`}
          </h1>
          <p>{person.description}</p>
          <div className="personDetail-meta">
            <MetaTable>
              {person.alias && [
                <MetaKey>Given Name</MetaKey>,
                <MetaValue>
                  {person.firstName} {person.lastName}
                  {person.kanji && ` (${person.kanji})`}
                </MetaValue>,
              ]}
              {person.birthYear && [
                <MetaKey>Born</MetaKey>,
                <MetaValue>
                  {formatDate({
                    year: person.birthYear,
                    month: person.birthMonth,
                    day: person.birthDay,
                  })}
                </MetaValue>,
                <MetaKey>Age</MetaKey>,
                <MetaValue>
                  {age(
                    { year: person.birthYear, month: person.birthMonth, day: person.birthDay },
                    {
                      year: person.deathYear || new Date().getFullYear(),
                      month: person.deathMonth || undefined,
                      day: person.deathDay || undefined,
                    }
                  )}
                </MetaValue>,
              ]}
              {person.deathYear && [
                <MetaKey>Died</MetaKey>,
                <MetaValue>
                  {formatDate({
                    year: person.deathYear,
                    month: person.deathMonth,
                    day: person.deathDay,
                  })}
                </MetaValue>,
              ]}
              <MetaKey>Country</MetaKey>
              <MetaValue>{person.country}</MetaValue>
              {Array.isArray(person.founded) &&
                person.founded.length > 0 && [
                  <MetaKey>Founded</MetaKey>,
                  <MetaValue>
                    {person.founded.map(studio => (
                      <StudioLink key={studio.id} studio={studio} />
                    ))}
                  </MetaValue>,
                ]}
            </MetaTable>
          </div>
        </div>
        <div className="personDetail-films">
          <h2 className="personDetail-subtitle">Films</h2>
          <FilmGrid films={films} meta={filmMeta} />
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
