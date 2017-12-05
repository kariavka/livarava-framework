import Ember from 'ember';
import config from 'livarava-framework/config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('lang', {path: '/:lang'}, function () {
    this.route('index', {path: '/'});
    this.route('page', {path: '/:uid'});
    this.route('post', {path: '/p/:id'});
    this.route('feedback');
  });
});

export default Router;
