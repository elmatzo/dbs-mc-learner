import DS from 'ember-data';

var Question = DS.Model.extend({
	text: DS.attr('string'),
	answer: DS.attr('boolean')
});

Question.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "text": "Bei der Bearbeitung der Anfrage σA>aR fuhrt ein Hash Index fuer das Attribut A manchmal zu einer effizienteren Auswertung aber niemals zu einer weniger effizienten Auswertung als ein B+ Baum Index fuer dieses Attribut.",
      "answer": true
    },
    {
      "id": 2,
      "text": "bla",
      "answer": false
    }
  ]
});

export default Question;