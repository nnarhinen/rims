'use strict';
var parseArgs = require('minimist');

module.exports = (process, done) => {
  let argv = parseArgs(process.argv.slice(2));
  if (Object.keys(argv).length === 1 && !argv._.length) {
    process.stdout.write('Usage: rims <command>');
    return done(-1);
  }
  done(0);
};


