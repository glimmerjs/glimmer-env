import { DEBUG, CI } from '../src/index';

const { module, test } = QUnit;

module('@glimmer/env');

test('it exports DEBUG', function(assert) {
  assert.equal(DEBUG, false);
});

test('it exports CI', function(assert) {
  assert.equal(CI, false);
});
