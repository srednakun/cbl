module.exports = function(app) {
  app.controller('AddAdminController', ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {

    $http.defaults.headers.common.token = $cookies.get('token');

    $scope.addAdminRole = function(user){
      $http({
        method: 'PUT',
        url: 'api/auth/addadmin',
        data: $scope.user
      }).then(function(res){
        console.log(res);
        $scope.user = {};
      }, function(res){
        console.log('AddAdminController updateRole error ' + res);
      });
    };

    $scope.removeAdminRole = function(user){
      $http({
        method: 'PUT',
        url: 'api/auth/removeadmin',
        data: $scope.user
      }).then(function(res){
        console.log(res);
        $scope.user = {};
      }, function(res){
        console.log('AddAdminController remove error ' + res);
      });
    };
  }]);
};
