'use strict';


var assert = require('assert');
var yaml   = require('../../');


test('safeLoad should return null for empty input', function () {
  assert.strictEqual(yaml.safeLoad(''), null);
  assert.strictEqual(yaml.safeLoad('\n'), null);
  assert.strictEqual(yaml.safeLoad('\n\n'), null);
  assert.strictEqual(yaml.safeLoad('# hmm'), null);
});
