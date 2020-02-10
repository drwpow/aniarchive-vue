import * as preact from '/web_modules/preact.js';
import { Link } from '/web_modules/preact-router.js';
import { OneFilmQuery } from '../../types/graphql';

interface StudioLinkProps {
  studio: OneFilmQuery['film']['studio'];
}

const StudioLink: preact.FunctionComponent<StudioLinkProps> = ({ studio }) => (
  <Link className="personLink" href={`/studio/${studio.id}`}>
    <div className="personLink-avatar">
      <img src={studio.image.url} alt={studio.image.title} />
    </div>
    {studio.name}
  </Link>
);

export default StudioLink;
