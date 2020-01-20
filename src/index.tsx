import * as preact from '/web_modules/preact.js';
import App from './components/App/index.js';

const appMount = document.querySelector('#app');
if (appMount) {
  preact.render(<App />, appMount);
}

export default App;
