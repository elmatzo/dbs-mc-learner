import DS from 'ember-data';
import FixtureData from 'dbs-mc-learner/fixtures/question-data';

var Question = DS.Model.extend({
	text: DS.attr('string'),
	answer: DS.attr('boolean')
});

Question.reopenClass({
  FIXTURES: FixtureData
});

export default Question;