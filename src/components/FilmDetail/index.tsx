import * as preact from '/web_modules/preact.js';

import AnimationGrid from '../AnimationGrid/index.js';
import { MetaTable, MetaKey, MetaValue } from '../MetaTable/index.js';
import PersonLink from '../PersonLink/index.js';
import SkeletonImg from '../SkeletonImg/index.js';
import SkeletonText from '../SkeletonText/index.js';
import StudioLink from '../StudioLink/index.js';
import { OneFilmQuery } from '../../types/graphql';

interface FilmDetailProps {
  film?: OneFilmQuery['film'];
}

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
          <div className="filmDetail-meta">
            <MetaTable>
              {film.studio && [
                <MetaKey>Studio</MetaKey>,
                <MetaValue>
                  <StudioLink studio={film.studio} />
                </MetaValue>,
              ]}
              {Array.isArray(film.directors) &&
                film.directors.length > 0 && [
                  <MetaKey>Director{film.directors.length > 1 && 's'}</MetaKey>,
                  <MetaValue>
                    {film.directors.map(person => (
                      <PersonLink key={person.id} person={person} />
                    ))}
                  </MetaValue>,
                ]}
              {Array.isArray(film.writers) &&
                film.writers.length > 0 && [
                  <MetaKey>Writer{film.writers.length > 1 && 's'}</MetaKey>,
                  <MetaValue>
                    {film.writers.map(person => (
                      <PersonLink key={person.id} person={person} />
                    ))}
                  </MetaValue>,
                ]}
              {Array.isArray(film.composers) &&
                film.composers.length > 0 && [
                  <MetaKey>Composer{film.composers.length > 1 && 's'}</MetaKey>,
                  <MetaValue>
                    {film.composers.map(person => (
                      <PersonLink key={person.id} person={person} />
                    ))}
                  </MetaValue>,
                ]}
            </MetaTable>
          </div>
          <div className="filmDetail-animations">
            {Array.isArray(film.animationSequences) &&
              film.animationSequences.length > 0 && [
                <h2 className="filmDetail-subtitle">Animation Sequences</h2>,
                <AnimationGrid animationSequences={film.animationSequences} />,
              ]}
          </div>
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
