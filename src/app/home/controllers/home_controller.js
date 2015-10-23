module.exports = function(app) {
  app.controller('HomeController', ['$scope', '$http', 'alertService', 'busy', function($scope, $http, alertService, busy) {
    $scope.teams = [];


    $scope.getWholeSeason = function() {
      $http({
          method: 'GET',
          url: 'api/season/getwholeseason'
        }).then(function(res){
           $scope.teams = res.data.teams;
        }, function(res){
          console.log('AddGameController getSeason error ' + res);
      });
    }();

    
  }]);
};
