'use strict';

const Team = require('../models/Team');
const User = require('../models/user');

const Statmaster = {
  home: {
    handler: function(request, h) {
      return h.view('home', { title: 'Add a Team' });
    }
  },

  report: {
    handler: async function(request, h) {
      const teams = await Team.find().populate('user');
      return h.view('report', {
        title: 'Teams',
        teams: teams
      });
    }
  },

  addTeam: {
    handler: async function(request, h) {
      try {
        const id = request.auth.credentials.id;
        const user = await User.findById(id);
        const data = request.payload;
        const newTeam = new Team({
          name: data.name,
          manager: data.manager,
          user: user
        });
        await newTeam.save();
        return h.redirect('/report');
      }catch(err){
        return h.view('main', { errors: [{ message: err.message }] });
      }
    }
  }
};


module.exports = Statmaster;