import Ember from 'ember';

export default Ember.ArrayController.extend({

	counter: 0,

  	question: function() {
    	return this.get('model').objectAt(this.counter);
  	}.property('model'),

  	
  	actions: {
  		nextQuestion: function() {
  			this.counter++;
  			console.log(this.counter);
  		}
  	}
});
