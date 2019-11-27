import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import RSVP from 'rsvp';
import config from 'livarava-framework/config/environment';
import getFiltersFromParams from 'livarava-framework/utils/get-filters-from-params';

export default Route.extend({
    // Services
    store: service(),

    // Model
    model(params) {
        const store = get(this, 'store');
        params['site'] = config.api.site;
        params['featured'] = true;
        params['display'] = 'public';
        const filters = getFiltersFromParams(params);
        return RSVP.hash({items: store.query('post', filters)});
    },

    // Actions
    actions: {

        reload() {
            this.refresh();
        }

    },
});
