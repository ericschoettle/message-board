import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  body: DS.attr(),
  link: DS.attr(),
  entry: DS.belongsTo('entry', { async: true})
});
