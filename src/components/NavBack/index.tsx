import * as preact from '/web_modules/preact.js';
import { Link } from '/web_modules/preact-router.js';

const NavBack: preact.FunctionComponent = () => (
  <header className="navBack">
    <Link activeClassName="is-active" href="/">
      ‹ Back
    </Link>
  </header>
);

export default NavBack;
