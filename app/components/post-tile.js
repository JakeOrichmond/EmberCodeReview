import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
  }
});
