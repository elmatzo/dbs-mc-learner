import Ember from 'ember';
/* global sweetAlert */

export default Ember.ArrayController.extend({

  needs: 'results',
	//TODO: Init Function
	//TODO: callback function dry / self - this rework
  question: function() {
    return this.get('model').objectAt(0);
  }.property('model'),

  counter: 1,

  allMode: true,

  wrongQuestions: [],

  resetCounter: function() {
    this.counter = 1;
  },

  setAllMode: function() {
    this.set('allMode', true);
    this.set('wrongQuestions', []);
    this.setQuestion();
  },

  setFalseMode: function() {
    this.set('allMode', false);
    this.setQuestion();
  },

  setQuestion: function() {
    if(this.allMode)
      this.set('question',this.get('model').objectAt(this.counter-1));
    else
      this.set('question',this.wrongQuestions.objectAt(this.counter-1));
  },

	actions: {

    //Called when user clicks true / false
		answerQuestion: function(answer) {

			//Callback for Alert - shows next Question after alert's closed
			var controller = this;
      var questionsLength = this.get('model').get('length');
			var nextQuestion = function(){
				if(controller.counter < questionsLength){
  				controller.incrementProperty('counter');
  				controller.setQuestion();
			  }
			  else{
          controller.get('controllers.results').set(
            'correctAnswers',
            questionsLength-controller.get('wrongQuestions').get('length')
          );
          controller.get('controllers.results').set(
            'wrongAnswers',
            controller.get('wrongQuestions').get('length')
          );
          controller.transitionToRoute('results');
			  }
		  };

  		//Handle User Answer - shows success/error alert
      var buttonText = 'Naechste Frage';
      if(this.get('model').get('length') === this.get('question').get('id'))
        buttonText = 'Ergebnisse';

  		if(this.get('question').get('answer') === answer){
  			sweetAlert({
  				title: 'Korrekt...',
  				type: 'success',
  				confirmButtonText: buttonText,
  			}, nextQuestion);
  		}
  		else{
  			this.wrongQuestions.pushObject(this.get('question'));
  			sweetAlert({
  				title: 'Inkorrekt...',
  				type: 'error',
  				confirmButtonText: buttonText,
  			}, nextQuestion);
  		}
		}
	}
});
