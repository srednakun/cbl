module.exports = function(app) {
  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/html/views/home/home_view.html',
        controller: 'HomeController'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: '/html/views/admin/admin_view.html'
      })
      .state('admin.addAdmin', {
        url: '/addAdmin',
        templateUrl: '/html/views/admin/addAdmin/addAdmin_view.html',
        controller: 'AddAdminController'
      })
      .state('admin.addSeason', {
        url: '/addseason',
        templateUrl: '/html/views/admin/addSeason/addSeason_view.html',
        controller: 'AddSeasonController'
      })
      .state('admin.addScore', {
        url: '/addscore',
        templateUrl: '/html/views/admin/addScore/addScore_view.html',
        controller: 'AddScoreController'
      })
      .state('admin.addGame', {
        url: '/addgame',
        templateUrl: '/html/views/admin/addGame/addGame_view.html',
        controller: 'AddGameController'
      })
      .state('admin.addTeam', {
        url: '/addTeam',
        templateUrl: '/html/views/admin/addTeam/addTeam_view.html',
        controller: 'AddTeamController'
      })
      .state('admin.changeTable', {
        url: '/changetable',
        templateUrl: '/html/views/admin/changeTable/changeTable_view.html'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: '/html/views/auth/signin_view.html',
        controller: 'SignInController'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: '/html/views/auth/signup_view.html',
        controller: 'SignUpController'
      })
      .state('registerTeam', {
        url: '/registerteam',
        templateUrl: '/html/views/team/register_team_view.html',
        controller: 'RegisterTeamController'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/html/views/contact/contact_view.html',
        controller: 'contactController'
      })
      .state('calendar', {
        url: '/calendar',
        templateUrl: '/html/views/calendar/calendar_view.html',
        controller: 'calendarController'
      })
      .state('news', {
        url: '/news',
        templateUrl: '/html/views/news/news_view.html',
        controller: 'newsController'
      });
  });
};
