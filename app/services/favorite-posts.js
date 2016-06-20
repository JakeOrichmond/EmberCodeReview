import Ember from 'ember';

export default Ember.Service.extend({
  favorites : [],

  add(favorite) {
    Ember.Logger.log(favorite);
    this.get('favorites').pushObject(favorite);
  }
});
