import Ember from 'ember';
import startApp from '../helpers/start-app';
import FixtureData from 'dbs-mc-learner/fixtures/question-data';

var application;

module('Acceptance: Questions', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('Questions are displayed on the index route', function() {
  visit('/');

  andThen(function() {
    equal(find('.question').length, FixtureData.length);
    var html = find('.questions').html();
    FixtureData.forEach(function (question) {
      ok(html.indexOf(question.text.substring(0, 10)) > -1);
    });
  });
});
