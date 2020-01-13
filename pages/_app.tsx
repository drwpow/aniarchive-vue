import React from 'react';

import '../assets/styles.css';

interface AppProps {
  Component: React.FunctionComponent;
  pageProps: any;
}

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
