// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = function (options) {
  options.plugins.push(
    new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }),
  );

  return options;
};
