import config from 'nvdc/config/environment';

export default function getApiUrl(functionName, params, method = 'GET') {
  let hostUrl = config.api.host;
  let apiPath = config.api.path;
  let key = config.api.key;
  let time = new Date().getTime();
  let url = `${hostUrl}${apiPath}/functions/${functionName}`;

  if (method === 'GET') {
    url += `/?__t=${time}&key=${key}`;
  } else {
    return url;
  }

  for (let param in params) {
    if (params.hasOwnProperty(param)) {
      let value = encodeURIComponent(params[param]);
      url = url + `&${param}=${value}`;
    }
  }

  return url;
}
