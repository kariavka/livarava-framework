import Ember from 'ember';

export function localeLabel(locale) {
  switch (locale[0]) {
    case 'ru':
      return 'Русский';
    case 'uk':
      return 'Українська'
  }
}

export default Ember.Helper.helper(localeLabel);
