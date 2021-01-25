'use strict';

const Statmaster = {
  index: {
    handler: function(request, h) {
      return h.view('main', {title: 'Welcome to Statmaster'});
    }
  },
  signup: {
    handler: function(request, h) {
      return h.view('signup', {title: 'Sign up for Statmaster'});
    }
  },
  login: {
    handler: function(request, h) {
      return h.view('login', {title: 'Login to Statmaster'});
    }
  }
}

module.exports = Statmaster;