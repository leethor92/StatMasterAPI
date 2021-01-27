const Statmaster = require('./app/controllers/statmaster.js');
const Accounts = require('./app/controllers/accounts');

module.exports = [
  { method: 'GET', path: '/', config: Accounts.index },
  { method: 'GET', path: '/signup', config: Accounts.showSignup },
  { method: 'GET', path: '/login', config: Accounts.showLogin },
  { method: 'GET', path: '/logout', config: Accounts.logout },
  { method: 'GET', path: '/settings', config: Accounts.showSettings },
  { method: 'GET', path: '/home', config: Statmaster.home },
  { method: 'GET', path: '/report', config: Statmaster.report },

  { method: 'POST', path: '/signup', config: Accounts.signup },
  { method: 'POST', path: '/login', config: Accounts.login },
  { method: 'POST', path: '/team', config: Statmaster.addTeam },
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