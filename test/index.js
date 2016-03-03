'use strict';

var test = require('tape');
var konst = require('..');

test('empty array', function(t) {
  t.plan(1);
  t.looseEqual(konst([]), {});
});

test('non-empty array', function(t) {
  t.plan(1);
  t.looseEqual(konst(['FOO', 'BAR', 'BAZ']), {
    FOO: 'FOO',
    BAR: 'BAR',
    BAZ: 'BAZ'
  });
});

test('argument slice', function(t) {
  t.plan(1);

  t.looseEqual(konst('FOO', 'BAR', 'BAZ'), {
    FOO: 'FOO',
    BAR: 'BAR',
    BAZ: 'BAZ'
  });
});
