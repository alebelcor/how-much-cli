'use strict';

import execa from 'execa';
import test from 'ava';

const cli = './cli.js'

test('it should validate the parameters', t => {
  t.throws(execa(cli, []));
  t.throws(execa(cli, ['']));
  t.throws(execa(cli, ['USD']));
  t.throws(execa(cli, ['USD', '']));
});
