import Ember from 'ember';

export default Ember.ArrayController.extend({
  secondQuestion: function() {
    return this.get('content').objectAt(1);
  }.property('content')
});
