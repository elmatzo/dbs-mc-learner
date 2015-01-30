import Ember from 'ember';

export default Ember.ArrayController.extend({

	counter: 0,

  	question: function() {
    	return this.get('model').objectAt(this.counter);
  	}.property('model'),


  	actions: {
  		nextQuestion: function() {
  			console.log(this.get('model').length );
  			if(this.counter < this.get('model').length ) {
	  			this.counter++;
	  			this.set('question', this.get('model').objectAt(this.counter));
	  			console.log(this.counter);
  			}
  		}
  	}
});