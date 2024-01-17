const path = require('path');

module.exports = {

  resolve: {
    fallback: {
        "stream": require.resolve("stream-browserify"),
        "url":false,
        "buffer": require.resolve("buffer/"),
        "util": require.resolve("util/"),
        "crypto": require.resolve("crypto-browserify"),
        "https": false,
    }
  }
};

