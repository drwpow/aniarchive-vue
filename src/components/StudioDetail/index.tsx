import * as preact from '/web_modules/preact.js';

import FilmGrid from '../FilmGrid/index.js';
import { MetaTable, MetaKey, MetaValue } from '../MetaTable/index.js';
import PersonLink from '../PersonLink/index.js';
import SkeletonText from '../SkeletonText/index.js';
import SkeletonImg from '../SkeletonImg/index.js';
import { OneStudioQuery } from '../../types/graphql';

interface StudioDetailProps {
  studio?: OneStudioQuery['studio'];
}

const StudioDetail: preact.FunctionComponent<StudioDetailProps> = ({ studio }) => {
  if (studio) {
    return (
      <div className="studioDetail">
        <div className="studioDetail-img">
          <img src={studio.image.url} alt={studio.name} width="400" />
        </div>
        <div className="studioDetail-details">
          <h1 className="studioDetail-title">{studio.name}</h1>
          <div className="studioDetail-meta">
            <MetaTable>
              {studio.foundedYear && [
                <MetaKey>Founded</MetaKey>,
                <MetaValue>{studio.foundedYear}</MetaValue>,
              ]}
              {Array.isArray(studio.founders) &&
                studio.founders.length > 0 && [
                  <MetaKey>Founders</MetaKey>,
                  <MetaValue>
                    {studio.founders.map(founder => (
                      <PersonLink key={founder.id} person={founder} />
                    ))}
                  </MetaValue>,
                ]}
              {studio.country && [
                <MetaKey>Country</MetaKey>,
                <MetaValue>{studio.country}</MetaValue>,
              ]}
              {studio.city && [<MetaKey>City</MetaKey>, <MetaValue>{studio.city}</MetaValue>]}
            </MetaTable>
          </div>
        </div>
        <div className="studioDetail-films">
          <h2 className="studioDetail-subtitle">Films</h2>
          <FilmGrid films={studio.films} />
        </div>
      </div>
    );
  }
  return (
    <div className="studioDetail">
      <SkeletonImg />
      <div className="studioDetail-details">
        <h1 className="studioDetail-title">
          <SkeletonText>Studio Ghibli</SkeletonText>
        </h1>
      </div>
      <div className="studioDetail-films">
        <h2 className="studioDetail-subtitle">
          <SkeletonText>Films</SkeletonText>
        </h2>
        <FilmGrid />
      </div>
    </div>
  );
};

export default StudioDetail;
