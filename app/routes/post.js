import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      Ember.Logger.log(params);
      var newAnswer = this.store.createRecord('answer', params);
      var post = params.post;
      Ember.Logger.log(newAnswer);
      post.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return post.save();
      });
      Ember.Logger.log(post);
      this.transitionTo('post', params.post);
    }

  }
});
