#!/usr/bin/env node

'use strict';

const meow = require('meow');
const howMuch = require('how-much');

const cli = meow(`
  Usage
    $ how-much <from> <to>

  Options
    from  Specify a base (currency code ISO 4217)
      to  Specify the target (currency code ISO 4217)

  Examples
    $ how-much USD MXN
    18.47
`);

const from = cli.input[0];
const to = cli.input[1];

if (typeof from !== 'string' || from.length === 0) {
  throw new TypeError('"from" parameter must be a valid string');
}

if (typeof to !== 'string' || from.length === 0) {
  throw new TypeError('"to" parameter must be a valid string');
}

howMuch(from, to)
  .then(console.log)
  .catch(console.error);
