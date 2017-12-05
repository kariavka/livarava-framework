import config from 'nvdc/config/environment';

export default function getLira(locale, name) {
  return parseInt(config.neuronet[locale][name]);
}
