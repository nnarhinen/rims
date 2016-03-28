'use strict';
var parseArgs = require('minimist');

module.exports = (process, done) => {
  let argv = parseArgs(process.argv.slice(2));
  if (Object.keys(argv).length === 1 && !argv._.length) {
    process.stdout.write('Usage: rims <command>\n');
    process.stdout.write('Show available commands with rims help\n');
    return done(-1);
  }
  switch (argv._[0]) {
  case 'help':
    process.stdout.write('Available commands:\n');
    process.stdout.write('new - creates a new project\n');
    done(0);
    break;
  default:
    done(-1);
  }
};


