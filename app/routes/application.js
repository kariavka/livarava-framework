import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';
import LoadingSliderMixin from '../mixins/loading-slider';

export default Ember.Route.extend(LoadingSliderMixin, ResetScrollMixin, {});
