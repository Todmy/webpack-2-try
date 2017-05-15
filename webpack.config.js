const env = process.env.NODE_ENV || 'default';
const config = require(`./webpack/${env}.config`);

module.exports = config;