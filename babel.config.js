/* eslint-disable no-misleading-character-class */
/* eslint-disable no-async-promise-executor */

module.exports = function (api) {
    api.cache(true);
    const presets = [['@babel/env', { targets: 'ie 11' }]];
    return { presets, plugins: ['@babel/plugin-transform-runtime'] };
};
