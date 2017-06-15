import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyAnswer() {
      this.sendAction('destroyAnswer', answer)
    }
  }
});
