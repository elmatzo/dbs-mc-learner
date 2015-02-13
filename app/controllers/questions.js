import Ember from 'ember';

export default Ember.ArrayController.extend({

  pageCounter : 0,

  currentPage : function() {
    return this.get('pageCounter')+1;
  }.property(),

  maxPages : function() {
    return Math.ceil(this.get('model').get('length')/3);
  }.property(),

  //TODO: Computed property?
  nextIsPossible: true,

  prevIsPossible: false,

  questions: function() {
    return this.calcQuestionsForPage();
  }.property('model'),

  calcQuestionsForPage: function() {
    var questionsForPage = [];
    var allQuestions = this.get('model');
    for(var i = this.get('pageCounter')*3; i < (this.get('pageCounter')*3)+3; i++){
      if(i < allQuestions.get('length')){
        questionsForPage.pushObject(allQuestions.objectAt(i));
      }
    }
    return questionsForPage;
  },

  actions: {

    nextPage: function() {
      this.set('prevIsPossible', true);
      this.incrementProperty('pageCounter');
      this.incrementProperty('currentPage');
      this.set('questions', this.calcQuestionsForPage());
      if(this.get('currentPage') === this.get('maxPages'))
        this.set('nextIsPossible', false);
    },

    prevPage: function() {
      this.set('nextIsPossible', true);
      this.decrementProperty('pageCounter');
      this.decrementProperty('currentPage');
      this.set('questions', this.calcQuestionsForPage());
      if(this.get('currentPage') === 1)
        this.set('prevIsPossible', false);
    }
  }



});
