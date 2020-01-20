import * as preact from '/web_modules/preact.js';

const Wrapper: preact.FunctionComponent = ({ children }) => (
  <section className="wrapper">{children}</section>
);

export default Wrapper;
