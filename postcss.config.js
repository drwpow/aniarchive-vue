/* eslint-disable @typescript-eslint/no-var-requires */
const cssnano = require('cssnano');
const postcssEasyImport = require('postcss-easy-import');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssEasyImport(), // import must be first!
    postcssPresetEnv({
      // https://preset-env.cssdb.org/features
      autoprefixer: {
        cascade: false,
      },
      features: {
        'logical-properties-and-values': {
          dir: 'ltr',
        },
        'gap-properties': true,
        'nesting-rules': true,
      },
    }),
    ...(process.env.NODE_ENV === 'production' ? [cssnano()] : []),
  ],
};
