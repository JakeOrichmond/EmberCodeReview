import Ember from 'ember';

export default Ember.Component.extend({
  favoritePosts: Ember.inject.service(),
  updateRentalForm: false,
  actions: {
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    addToFavorites(favorite) {
      Ember.Logger.log(favorite);
      this.get('favoritePosts').add(favorite);
    }
  }
});
