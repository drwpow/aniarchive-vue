import React from 'react';

import './styles.css';

const Wrapper: React.FunctionComponent = ({ children }) => (
  <section className="wrapper">{children}</section>
);

export default Wrapper;
