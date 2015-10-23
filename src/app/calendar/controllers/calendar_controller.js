module.exports = function(app) {
  app.controller('calendarController', ['$scope', '$http', 'alertService', 'busy', function($scope, $http, alertService, busy) {
    busy.start();
    $scope.games = [];
    $scope.seasonFilter = '';
    $scope.divisionFilter = 'A';

    $scope.getWholeSeason = function() {
      $http({
          method: 'GET',
          url: 'api/season/getwholeseason'
        }).then(function(res){
           $scope.games = res.data.games;
           busy.stop();
        }, function(res){
          console.log('AddGameController getSeason error ' + res);
          busy.stop();
      });
    }();

    $scope.myFilterFunction = function (item) { 
      return true; 
    };

  }]);
};
