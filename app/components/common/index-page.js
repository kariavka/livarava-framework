import Ember from 'ember';

export default Ember.Component.extend({
  // Services
  i18n: Ember.inject.service(),
  router: Ember.inject.service(),

  // Flags
  showLanguageDropdown: false,

  // Actions
  actions: {

    setLocale(locale) {
      this.set('showLanguageDropdown', false);
      this.get('i18n').set('locale', locale);
      this.get('router').transitionTo('lang', locale);
    },

    setCurrentService(item) {
      if (!item) return;
      this.set('model.currentService', item);
    },

    toggleMenu() {
      this.toggleProperty('showMenu');
    }
  }
});
