import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import {get} from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
    // Services
    store: service(),

    // Model
    model(params) {
        const store = get(this, 'store');
        return RSVP.hash({item: store.find('post', params.id)});
    },

    // Actions
    actions: {

        reload() {
            this.refresh();
        }

    },
});
