/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const gqlmin = require('gqlmin').default;

const gqlDir = path.resolve(__dirname, '..', 'src', 'graphql');
const outputDir = path.resolve(__dirname, '..', 'src', 'graphql');

fs.readdirSync(gqlDir)
  .filter(file => file.endsWith('.graphql'))
  .forEach(file => {
    const query = fs.readFileSync(path.resolve(gqlDir, file), 'utf8');
    const min = gqlmin(query);
    try {
      fs.mkdirSync(outputDir);
    } catch (err) {
      // don’t worry bout it
    }
    fs.writeFileSync(path.resolve(outputDir, `${file}.js`), `export default '${min}'`);
  });
