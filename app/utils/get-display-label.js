import config from "livarava-framework/config/environment";

export default function getDisplayLabel(display) {
  const options = config.displayOptions;
  let out = 'Unknown';
  options.forEach((optoin) => {
    if (optoin.value === display) {
      out = optoin.label;
    }
  });
  return out;
}
