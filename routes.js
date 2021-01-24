const Statmaster = require('./app/controllers/statmaster.js');

module.exports = [
  { method: 'GET', path: '/', config: Statmaster.index },
  { method: 'GET', path: '/signup', config: Statmaster.signup },
  { method: 'GET', path: '/login', config: Statmaster.login },
  {method: "GET", path: '/{param*}', handler: {directory: {path:'./public'}}}
  ];