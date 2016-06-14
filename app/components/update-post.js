import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        notes: this.get('notes'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
