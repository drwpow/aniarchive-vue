import * as preact from '/web_modules/preact.js';
import { Link } from '/web_modules/preact-router.js';
import { OneFilmQuery } from '../../types/graphql';

interface PersonLinkProps {
  person: OneFilmQuery['film']['directors'][0];
}

const PersonLink: preact.FunctionComponent<PersonLinkProps> = ({ person }) => (
  <Link className="personLink" href={`/person/${person.id}`}>
    <div className="personLink-avatar">
      <img src={person.image.url} alt={person.image.title} />
    </div>
    {person.alias ? person.alias : `${person.firstName} ${person.lastName}`}
  </Link>
);

export default PersonLink;
