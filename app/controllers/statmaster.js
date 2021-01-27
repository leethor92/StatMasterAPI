'use strict';

const Statmaster = {
  home: {
    handler: function(request, h) {
      return h.view('home', { title: 'Add a Team' });
    }
  },
  report: {
    handler: function(request, h) {
      return h.view('report', {
        title: 'List of teams',
        teams: this.teams
      });
    }
  },
  addTeam: {
    handler: function(request, h) {
      const data = request.payload;
      var memberEmail = request.auth.credentials.id;
      data.member = this.users[memberEmail];
      this.teams.push(data);
      return h.redirect('/report');
    }
  }
};


module.exports = Statmaster;