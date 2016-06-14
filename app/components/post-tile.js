import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    delete(post) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.sendAction('destroyPost', post);
    }
  },
  update(rental, params) {
    this.sendAction('update', rental, params);
  },
}
});
