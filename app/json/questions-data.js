import Ember from 'ember';
import Question from 'dbs-mc-learner/models/question';

var questions = [
	{
		"id" : 1,
		"text" : "Bei der Bearbeitung der Anfrage σA>aR fuhrt ein Hash Index fuer das Attribut A manchmal zu einer effizienteren Auswertung aber niemals zu einer weniger effizienten Auswertung als ein B+ Baum Index fuer dieses Attribut.",
		"answer" : true
	},
	{
		"id" : 2,
		"text" : "bla",
		"answer" : false
	}
];

var arrayProxy = Ember.ArrayProxy.create({
	content: Ember.A(questions)
});

export default arrayProxy.map(function(question) {
	return Question.create(question);
});