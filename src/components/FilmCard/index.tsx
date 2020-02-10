import * as preact from '/web_modules/preact.js';
import { Link } from '/web_modules/preact-router.js';

import SkeletonImg from '../SkeletonImg/index.js';
import SkeletonText from '../SkeletonText/index.js';

interface FilmCardProps {
  id: string;
  image?: string;
  meta?: string;
  releaseYear: number;
  skeleton?: boolean;
  title: string;
  titleEN: string;
}

const FilmCard: preact.FunctionComponent<FilmCardProps> = ({
  id,
  image,
  meta,
  releaseYear,
  skeleton,
  title,
  titleEN,
}) =>
  !skeleton ? (
    <Link activeClassName="is-active" href={`/film/${id}`} className="filmCard">
      <div className="filmCard-img">
        <img alt={title} src={image} height="425" width="300" />
      </div>
      <h3 className="filmCard-title">
        {title}
        {titleEN !== title && [<br />, titleEN]}
      </h3>
      <div className="filmCard-year">{releaseYear}</div>
      {meta}
    </Link>
  ) : (
    <div className="filmCard">
      <div className="filmCard-img">
        <SkeletonImg />
      </div>
      <h3 className="filmCard-title">
        <SkeletonText>{title}</SkeletonText>
        <small>
          <SkeletonText>{meta}</SkeletonText>
        </small>
      </h3>
      <div className="filmCard-year">
        <SkeletonText>{releaseYear}</SkeletonText>
      </div>
    </div>
  );

export default FilmCard;
