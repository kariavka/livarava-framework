import config from 'livarava-framework/config/environment';

export default function getLira(locale, name) {
  return parseInt(config.neuronet[locale][name]);
}
