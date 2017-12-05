import Ember from 'ember';
import config from 'livarava-framework/config/environment';

export default Ember.Route.extend({
  // Services
  i18n: Ember.inject.service(),
  moment: Ember.inject.service(),

  // After Model
  afterModel: function (params) {
    let allowedLocales = config.i18n.allowedLocales;
    let defaultLocale = config.i18n.defaultLocale;
    let computedLocale = params && params.lang && allowedLocales.indexOf(params.lang) > -1 ? params.lang : defaultLocale;
    this.set('i18n.locale', computedLocale);
    this.get('moment').setLocale(computedLocale);
  },
});
