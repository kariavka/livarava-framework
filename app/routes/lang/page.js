import Ember from 'ember';
import config from 'nvdc/config/environment';

export default Ember.Route.extend({
  // Services
  i18n: Ember.inject.service(),

  // Variables
  page: null,

  // Model
  model(params) {
    let siteId = config.neuronet.site;
    let language = this.get('i18n.locale');
    let path = `/${language}/${params.uid}/`;

    return this.get('store').query('page', {
      'filter[site]': siteId,
      'filter[path]': path,
      per_page: 1,
      page: 1,
    }).then((pages) => {
      let page = pages.get("firstObject");

      if (!page) {
        return;
      }

      return this.get('store').findRecord('post', page.id);
    });
  },

});
