'use strict';
var mongoose = require('mongoose');
var Team = require(__dirname + '/team');

var seasonSchema = new mongoose.Schema({
  seasonNumber: {type: Number, unique: true, required:true},
  name: {type: String, unique: true, required: true},
  teams: [{
    team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    name: String,
    division: String,
    played: {type: Number, default: 0},
    win: {type: Number, default: 0},
    lost: {type: Number, default: 0},
    baskets: {
      scored: {type: Number, default: 0},
      missed: {type: Number, default: 0}
    },
    points: {type: Number, default: 0}
  }],
  games: [{
    teams: [{
      id: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
      score: {type: Number, default: 0}  
    }],
    date: Date,
    location: String
  }]
});

module.exports = exports = mongoose.model('Season', seasonSchema);