import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    save() {
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('addNewPost', false);
      this.sendAction('save', params);
    }
  }
});
