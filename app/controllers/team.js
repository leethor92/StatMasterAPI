'use strict';

const Team = require('../models/team');
const Joi = require('joi');

const TeamController = {
  handler: async function(request, h) {
    try {
      console.log("Point id: " + request.params.id);
      const team = await Team.findById(request.params.id);
      const file = request.payload.image.path;
      const data = request.payload;
      console.log('path: ' + file);

      return h.view('team', {
        title: 'Team Information',
        team: team
      });
    } catch (e) {
      return h.view('main', { errors: [{ message: e.message }] });
    }
  }
};

module.exports = TeamController;