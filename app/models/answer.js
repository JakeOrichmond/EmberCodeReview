import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  body: DS.attr(),
  author: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
