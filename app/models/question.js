import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  teaser: DS.attr(),
  body: DS.attr(),
  link: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
