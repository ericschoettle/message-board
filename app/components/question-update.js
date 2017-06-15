import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(){
      var params = {
        user: this.get('updateUser'),
        teaser: this.get('updateTeaser'),
        body: this.get('updateBody'),
        link: this.get('updateLink'),
        question: this.get('question')
      };
      debugger
      this.sendAction('updateQuestion', params);
    }
  }
});
