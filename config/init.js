var init = {
    local: {
        mode: 'dev',
        port: 5050
    },
    staging: {
        mode: 'staging',
        port: 4000
    },
    production: {
        mode: 'prod',
        port: 5000
    }
}
module.exports = function(mode) {
    return init[mode || process.argv[2] || 'local'] || init.local;
}