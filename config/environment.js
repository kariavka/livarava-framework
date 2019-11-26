'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'hospodari',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
  }

  if (environment === 'test') {
  }

  if (environment === 'production') {
  }

  return ENV;
};
