import Ember from 'ember';

export function noAnswers(params/*, hash*/) {
  var post =params[0];

  if(post.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<i class="material-icons">not_interested</i>');
  }
}

export default Ember.Helper.helper(noAnswers);
