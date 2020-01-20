import * as preact from '/web_modules/preact.js';
import { Link } from '/web_modules/preact-router.js';

import SkeletonImg from '../SkeletonImg/index.js';
import SkeletonText from '../SkeletonText/index.js';

import { AllFilmsQuery } from '../../types/graphql';

interface FilmCardProps {
  directors: AllFilmsQuery['films'][0]['directors'];
  id: string;
  image?: string;
  releaseYear: number;
  skeleton?: boolean;
  studio?: string;
  title: string;
  titleEN: string;
}

const formatPerson = (person: AllFilmsQuery['films'][0]['directors'][0]) =>
  person.alias ? person.alias : `${person.firstName} ${person.lastName}`;

const FilmCard: preact.FunctionComponent<FilmCardProps> = ({
  directors,
  id,
  image,
  releaseYear,
  skeleton,
  studio,
  title,
  titleEN,
}) =>
  !skeleton ? (
    <Link activeClassName="is-active" href={`/film/${id}`} className="filmCard">
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
    </Link>
  ) : (
    <div className="filmCard">
      <div className="filmCard-img">
        <SkeletonImg />
      </div>
      <h3 className="filmCard-title">
        <SkeletonText>{title}</SkeletonText>
        <small>
          <SkeletonText>
            {directors.map(formatPerson)}
            {studio && [' / ', studio]}
          </SkeletonText>
        </small>
      </h3>
      <div className="filmCard-year">
        <SkeletonText>{releaseYear}</SkeletonText>
      </div>
    </div>
  );

export default FilmCard;
