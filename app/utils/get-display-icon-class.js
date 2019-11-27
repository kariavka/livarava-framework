import config from "livarava-framework/config/environment";

export default function getDisplayIconClass(display) {
  const options = config.displayOptions;
  let out = 'fa-question';
  options.forEach((option) => {
    if (option.value === display) {
      out = option.icon;
    }
  });
  return out;
}
