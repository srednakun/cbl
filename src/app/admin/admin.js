module.exports = function(app){
   require('./controllers/addAdmin_controller')(app);
   require('./controllers/addSeason_controller')(app);
   require('./controllers/addTeam_controller')(app);
   require('./controllers/addGame_controller')(app);
   require('./controllers/addScore_controller')(app);
};
