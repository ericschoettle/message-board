import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion(){
      var params = {
        user: this.get('user'),
        teaser: this.get('teaser'),
        body: this.get('body'),
        link: this.get('link')
      };
      this.sendAction('saveEntry', params);
    }
  }
});
