import test from 'ava';
import run from 'test-cli';
import cli from './lib/cli';

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
