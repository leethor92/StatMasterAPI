'use strict';

const Team = require('../models/team');
const User = require('../models/user');

const Statmaster = {

  report: {
    handler: async function(request, h) {
      const teams = await Team.find().populate('user');
      return h.view('report', {
        title: 'Teams',
        teams: teams
      });
    }
  },

  showSettings: {
    handler: async function(request, h) {
      try {
        const id = request.auth.credentials.id;
        const team = await Team.findById(id);
        return h.view('team', { title: 'Team Info', team: team });
      } catch (err) {
        return h.view('login', { errors: [{ message: err.message }] });
      }
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
  },

  teamInfo: {
    handler: async function(request, h) {
      try {
        console.log("Point selected: " + request.params.id);
        const team = await Team.findById(request.params.id);
        return h.view('team', {
          title: 'Team Information',
          team: team
        });
      } catch (e) {
        return h.view('main', { errors:[{ message: e.message}]});
      }
    }
  },
};


module.exports = Statmaster;