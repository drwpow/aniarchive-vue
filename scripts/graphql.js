/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const gqlmin = require('gqlmin').default;

const gqlDir = path.resolve(__dirname, '..', 'src', 'graphql');
const outputDir = path.resolve(__dirname, '..', 'public', 'graphql');

['all-films', 'one-film', 'one-person'].forEach(file => {
  const query = fs.readFileSync(path.resolve(gqlDir, `${file}.graphql`), 'utf8');
  const min = gqlmin(query);
  try {
    fs.mkdirSync(outputDir);
  } catch (err) {
    // don’t worry bout it
  }
  fs.writeFileSync(path.resolve(outputDir, `${file}.graphql.js`), `export default '${min}'`);
});
