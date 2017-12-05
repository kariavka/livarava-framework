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
      key: '52487df8-8440-4658-94c8-d2a0281df969'
    },

    i18n: {
      defaultLocale: 'ru',
      allowedLocales: ['ru', 'uk']
    },

    moment: {
      includeLocales: ['ru', 'uk']
    },

    neuronet: {
      site: 34308,
      ru: {
        companyAbout: 123468,
        companyValues: 123743,
        docs: 123745,
        directions: 123866,
        services: 123840,
      },
      uk: {
        companyAbout: 123742,
        companyValues: 123744,
        docs: 123745,
        directions: 123866,
        services: 123840,
      }
    },

    fastboot: {
      hostWhitelist: ['local.nvdc.biz', /^localhost:\d+$/]
    },
  };

  if (environment === 'local') {
    ENV.api = {
      host: 'http://local.livarava.com',
      path: '/api/v2',
      key: '52487df8-8440-4658-94c8-d2a0281df969'
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
