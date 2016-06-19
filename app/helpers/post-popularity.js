import Ember from 'ember';

export function postPopularity(params/*, hash*/) {
  var post =params[0];

  if(post.get('answers').get('length') >= 2) {
    return Ember.String.htmlSafe('<i class="material-icons">done_all</i>');
  }
}

export default Ember.Helper.helper(postPopularity);
