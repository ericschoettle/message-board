import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(){
      var params = {
        user: this.get('user'),
        teaser: this.get('teaser'),
        body: this.get('body'),
        link: this.get('link'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
