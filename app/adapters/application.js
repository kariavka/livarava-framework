import DS from 'ember-data';
import Ember from 'ember';
import config from 'nvdc/config/environment';

export default DS.JSONAPIAdapter.extend({

  host: config.api.host,
  namespace: 'api/v2',

  // Scope all ajax calls.
  ajax(url, type, hash) {
    let key = config.api.key;

    if (Ember.isEmpty(hash)) {
      hash = {};
    }

    if (Ember.isEmpty(hash.data)) {
      hash.data = {};
    }

    hash.data.key = key;

    return this._super(url, type, hash);
  }

});
