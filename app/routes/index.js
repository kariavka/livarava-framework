import Ember from 'ember';
import config from 'nvdc/config/environment';

export default Ember.Route.extend({
  // Services
  i18n: Ember.inject.service(),

  // Before Model
  beforeModel: function () {
    this.transitionTo('lang.index', config.i18n.defaultLocale);
  },
});
