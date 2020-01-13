/* eslint-disable @typescript-eslint/no-var-requires */
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      /*
        https://preset-env.cssdb.org/features
        Feel free to opt into css features as you want them, by restricting
        it to features we are not importing unless we need the polyfil.
      */
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
