const rewireMobX = require('react-app-rewire-mobx');
const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
    // use the MobX rewire
    config = rewireMobX(config,env);

    return config;
};
