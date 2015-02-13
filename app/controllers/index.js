import Ember from 'ember';
/* global sweetAlert */

export default Ember.ArrayController.extend({

  //TODO: Init Function
  //TODO: callback function dry / self - this rework

  needs: 'results',

  counter: 1,

  allMode: true,

  wrongQuestions: [],

  maxQuestions: function() {
    return this.get('allQuestions').get('length');
  }.property(),

  allQuestions: function() {
    return Ember.copy(this.get('model').toArray());
  }.property('model'),

  question: function() {
    console.log("initquestion!!!");
    this.setQuestion();
  }.property('model'),

  resetCounter: function() {
    this.counter = 1;
  },

  setAllMode: function() {
    console.log("######## setting all mode");
    this.set('allMode', true);
    this.set('wrongQuestions', []);
    this.set('allQuestions', Ember.copy(this.get('model').toArray()));
    console.log("Questions Length: " + this.get('allQuestions').get('length'));
    this.setMaxQuestions();
    this.setQuestion();
  },

  setFalseMode: function() {
    this.set('allMode', false);
    this.set('allQuestions', this.get('wrongQuestions'));
    this.set('wrongQuestions', []);
    this.setMaxQuestions();
    this.setQuestion();
  },

  setMaxQuestions: function() {
    this.set('maxQuestions', this.get('allQuestions').get('length'));
  },

  setQuestion: function() {
    var randomQuestionIndex = Math.floor(Math.random() * this.get('allQuestions').get('length'));
    var randomQuestion = this.get('allQuestions').objectAt(randomQuestionIndex);
    console.log("Questions Length: " + this.get('allQuestions').get('length'));
    console.log("Remove at: " + randomQuestionIndex);
    this.get('allQuestions').removeAt(randomQuestionIndex);
    this.set('question',randomQuestion);
  },

  setRightWrongQuestions: function(questionsLength) {
    var wrongQuestionsLength = this.get('wrongQuestions').get('length');
    this.get('controllers.results').set(
      'correctAnswers',
      questionsLength-wrongQuestionsLength
    );
    this.get('controllers.results').set(
      'wrongAnswers',
      this.get('wrongQuestions').get('length')
    );
    if(wrongQuestionsLength > 0)
      this.get('controllers.results').set('retakeWrongIsPossible', true);
    else
      this.get('controllers.results').set('retakeWrongIsPossible', false);
  },

	actions: {

    //Called when user clicks true / false
		answerQuestion: function(answer) {

			//Callback for Alert - shows next Question after alert's closed
			var controller = this;
      var questionsLength = this.get('maxQuestions');
			var nextQuestion = function(){
				if(controller.counter < questionsLength){
  				controller.incrementProperty('counter');
          controller.setQuestion();
			  }
			  else{
          controller.setRightWrongQuestions(questionsLength);
          controller.transitionToRoute('results');
			  }
		  };

  		//Handle User Answer - shows success/error alert
      var buttonText = 'Naechste Frage';
      if(questionsLength === controller.counter)
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
