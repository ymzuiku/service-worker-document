/* eslint-disable */

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/leviathan-reports/corp/**', {
      target: 'http://192.168.1.249:11601',
      changeOrigin: true,
    }),
  );
};
