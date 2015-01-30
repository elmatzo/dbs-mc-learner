import Ember from 'ember';

export default Ember.ArrayController.extend({

	//TODO: Init Function
	//TODO: callback function dry / self - this rework

	counter: 0,

	wrongQuestions : [],

  	question: function() {
    	return this.get('model').objectAt(this.counter);
  	}.property('model'),

  	actions: {

  		//Called when user clicks true / false
  		answerQuestion: function(answer) {

  			//Callback for Alert - shows next Question after alert's closed
  			var controller = this;
  			var nextQuestion = function(){
  				if(controller.counter < controller.get('model').get('length')-1){
					controller.counter++;
					controller.set(
						'question', 
						controller.get('model').objectAt(controller.counter)
					);
				}
				else{
					//TODO:
					/*
						Show End Screen:
							Score
							Again?
								all / wrong
					*/
				}
			}

			//Handle User Answer - shows success/error alert
			if(this.get('question').get('answer') === answer){
				sweetAlert({
					title: 'Korrekt...',
					type: 'success',    
					confirmButtonText: 'Nächste Frage',
				}, nextQuestion);
			}
			else{
				this.wrongQuestions.pushObject(this.get('question'));
				sweetAlert({
					title: 'Inkorrekt...',
					type: 'error',    
					confirmButtonText: 'Nächste Frage',
				}, nextQuestion);
			}

  		}
  	},


});