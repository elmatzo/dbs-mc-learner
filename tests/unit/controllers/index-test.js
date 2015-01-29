import {
  moduleFor,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:index', 'IndexController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

// Replace this with your real tests.
test('it sets the second question', function() {
  expect(1);

  var controller = this.subject();

  controller.set('model', Ember.A([
    Ember.Object.create({ text: 'first' }),
    Ember.Object.create({ text: 'second' })
  ]));

  equal('second', controller.get('secondQuestion').text);
});