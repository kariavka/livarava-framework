import Ember from 'ember';
import config from 'nvdc/config/environment';

export default Ember.Controller.extend({
  // Services
  store: Ember.inject.service(),

  // Properties
  subject: null,
  text: null,

  // Flags
  isSent: false,
  isError: false,

  // Actions
  actions: {

    reset() {
      this.set('subject', null);
      this.set('text', null);
      this.set('isSent', false);
      this.set('isError', false);
    },

    send() {
      const store = this.get('store');
      const siteId = config.neuronet.site;
      const subject = this.get('subject');
      const text = this.get('text');

      store.findRecord('neuron', siteId).then((site) => {
        let item = store.createRecord('feedback', {
          subject,
          text,
          site
        });
        item.save()
          .then(
            () => {
              this.set('isSent', true);
            },
            () => {
              this.set('isError', true);
            }
          )
      });
    },

  },
});
