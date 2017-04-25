import Ember from 'ember';

/**
 * Hash helper to workaround the EmptyObject bug in the normal helper:
 * https://github.com/emberjs/ember.js/issues/14738
 */
export function safeHash(_, obj) {
  return Ember.merge({}, obj);
}

export default Ember.Helper.helper(safeHash);
