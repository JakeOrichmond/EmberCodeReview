import Ember from 'ember';

export default Ember.Component.extend({
  favoritePosts: Ember.inject.service(),
  actions: {
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    addToFavorites(favorite) {
      Ember.Logger.log(favorite);
      this.get('favoritePosts').add(favorite);
    }
  }
});
