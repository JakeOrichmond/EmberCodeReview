import Ember from 'ember';

export default Ember.Component.extend({
  favoritePosts: Ember.inject.service(),
  updateRentalForm: false,
  answerTally: Ember.computed('post.author','post.answers.length', function() {
    return this.get('post.author') + '\'s' + ' question has ' + this.get('post.answers.length') + ' answers.';
  }),
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },
    addToFavorites(favorite) {
      Ember.Logger.log(favorite);
      this.get('favoritePosts').add(favorite);
    }
  }


});
