/* eslint-env node */
'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'livarava-framework',
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
    },

    api: {
      host: 'https://www.livarava.com',
      path: '/api/v2',
      key: '', // !Setup your LivaRava API key
    },

    i18n: {
      defaultLocale: 'en',  // !Setup your default locale
      allowedLocales: ['en', 'ru', 'uk']  // !Setup your default locales
    },

    moment: {
      includeLocales: ['en', 'ru', 'uk']
    },

    neuronet: {
      site: 0, // !Setup your LivaRava Site ID
      en: {},
      ru: {},
      uk: {},
    },

    fastboot: {
      hostWhitelist: ['local.yoursite.com', /^localhost:\d+$/]  // !Setup your site domain
    },
  };

  if (environment === 'local') {
    ENV.api = {
      host: 'http://local.livarava.com',
      path: '/api/v2',
      key: '', // !Setup your LivaRava API key
    };
  }

  if (environment === 'master') {
  }

  if (environment === 'test') {
  }

  if (environment === 'development') {
  }

  if (environment === 'production') {
  }

  return ENV;
};
