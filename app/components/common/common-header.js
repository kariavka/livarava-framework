import Ember from 'ember';

export default Ember.Component.extend({
  // Attributes
  showMenu: false,

  // Actions
  actions: {

    toggleMenu() {
      this.toggleProperty('showMenu');
    }

  },

});
