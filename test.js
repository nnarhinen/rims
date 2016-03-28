import test from 'ava';
import run from 'test-cli';
import cli from './lib/cli';
import tmp from 'tmp';
import fs from 'fs';

const rims = run.bind(null, cli);

test.cb('No input, show help', t => {
  t.plan(1);
  rims((stdout, stderr, code) => {
    t.is(code, -1);
    t.end();
  });
});

test.cb('rims help, list commands', t => {
  t.plan(2);
  rims('help', (stdout, stderr, code) => {
    t.is(code, 0);
    t.ok(/Available commands/.test(stdout));
    t.end();
  });
});

test.cb('rims new, create new project', t => {
  t.plan(2);
  withTempDirectory((err, rims, path) => {
    if (err) return t.end(err);
    rims('new', (stdout, stderr, code) => {
      t.is(code, 0);
      fs.readdir(path, (err, files) => {
        t.ok(files.indexOf('shared') !== -1);
        t.end();
      });
    });
  });
});

function withTempDirectory(cb) {
  tmp.dir((err, path) => {
    if (err) cb(err);
    cb(null, run.bind(null, cli, (process) => {
      process.cwd = () => path;
    }), path);
  });
}
