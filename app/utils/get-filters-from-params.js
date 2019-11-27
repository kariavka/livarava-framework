const meta = [
    'page', 'per_page', 'q', 'neuron', 'lira', 'sort'
];

export default function getFiltersFromParams(params) {
    for (let key in params) {

        if (!params.hasOwnProperty(key)) {
            continue;
        }

        if (params[key] === null || params[key] === 'null') {
            delete params[key];
            continue;
        }

        if (meta.includes(key)) {
            continue;
        }

        params[`filter[${key}]`] = params[key];
    }
    return params;
}
