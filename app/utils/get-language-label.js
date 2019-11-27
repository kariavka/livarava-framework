import config from "livarava-framework/config/environment";

export default function getLanguageLabel(language) {
  let out = null;
  let languages = config.i18n.localeLabels;
  languages.forEach(function (_language) {
    if (_language.value === language) {
      out = _language.label;
    }
  });
  return out;
}
