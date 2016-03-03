'use strict';

var test = require('tape');
var konst;

test('argument slice when Array.isArray does not exist', function(t) {
  t.plan(1);

  // Store the real isArray to reassign it back to Array later.
  var isArray = Array.isArray;

  // Make isArray null before requiring konst.
  Array.isArray = null;
  konst = require('..');
  t.looseEqual(konst('FOO', 'BAR', 'BAZ'), {
    FOO: 'FOO',
    BAR: 'BAR',
    BAZ: 'BAZ'
  });

  // Reassign isArray back to Array so that the rest of the tests can continue
  // under the assumption that isArray exists.
  Array.isArray = isArray;
});

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

