import Ember from 'ember';
import config from 'nvdc/config/environment';
import getLira from 'nvdc/utils/get-lira';

export default Ember.Route.extend({
  // Services
  store: Ember.inject.service(),
  i18n: Ember.inject.service(),

  // Model
  model() {
    const store = this.get('store');
    const locale = this.get('i18n.locale');

    return Ember.RSVP.hash({
      about: store.findRecord('page', getLira(locale, 'companyAbout')),
      values: store.findRecord('page', getLira(locale, 'companyValues')),
      docs: store.findRecord('page', getLira(locale, 'docs')),
      directions: store.query('page', {
        lira: getLira(locale, 'directions'),
        featured: true
      }),
      services: store.query('page', {
        lira: getLira(locale, 'services'),
        featured: true
      }),
    });
  },

  // Setup
  setupController(controller, model) {
    this._super(controller, model);

    this.controller.set('model.currentService', model.services.get('firstObject'));
  },
});
