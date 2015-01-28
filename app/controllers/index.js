import Ember from 'ember';

export default Ember.ArrayController.extend({
  secondQuestion: function() {
    return this.get('model').objectAt(1);
  }.property('model')
});
