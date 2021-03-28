const Statmaster = require('./app/controllers/statmaster.js');
const Accounts = require('./app/controllers/accounts');
const Team = require('./app/controllers/team');

module.exports = [
  { method: 'GET', path: '/', config: Accounts.index },
  { method: 'GET', path: '/signup', config: Accounts.showSignup },
  { method: 'GET', path: '/login', config: Accounts.showLogin },
  { method: 'GET', path: '/logout', config: Accounts.logout },
  { method: 'GET', path: '/settings', config: Accounts.showSettings },
  { method: 'GET', path: '/report', config: Statmaster.report },
  { method: 'GET', path: '/team/{id}', config: Statmaster.teamInfo },
  //{ method: 'GET', path: '/poi/deletePoint/{id}', config: Team.delete},

  { method: 'POST', path: '/signup', config: Accounts.signup },
  { method: 'POST', path: '/login', config: Accounts.login },
  { method: 'POST', path: '/addTeam', config: Statmaster.addTeam },
  { method: 'POST', path: '/settings', config: Accounts.updateSettings },

  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './public'
      }
    },
    options: { auth: false }
  }
  ];