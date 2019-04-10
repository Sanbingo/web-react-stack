/* eslint-disable global-require */
module.exports = (app) => {
  app.use(require('./api').routes());
  app.use(require('./render').routes());
};
