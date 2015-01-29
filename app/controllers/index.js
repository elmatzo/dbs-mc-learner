import Ember from 'ember';

export default Ember.ArrayController.extend({
	questionAt : 0,
  	nextQuestion: function() {
  		var question = this.get('model').objectAt(this.questionAt);
  		this.questionAt+=1;
    	return question;
  	}.property('model')
});
