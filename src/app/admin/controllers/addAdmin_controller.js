module.exports = function(app) {
  app.controller('AdminController', ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {

    $scope.userArray = []
    $http.defaults.headers.common.token = $cookies.get('token');

    $scope.getUsers = function(){
      $http({
        method: 'POST',
        url: 'api/auth/getusersfromdb'
      }).then(function(res){
        $scope.userArray = res.data;
        console.log('we got data ' + res.data);
      }, function(res){
        console.log('AddAdminController getUsers error ' + res);
      });
    };

    $scope.addAdminRole = function(user){
      $http({
        method: 'PUT',
        url: 'api/auth/addadmin'
        // data: $scope.season
      }).then(function(res){
        console.log(res);
      }, function(res){
        console.log('AddAdminController updateRole error ' + res);
      });
    };

    $scope.removeAdminRole = function(user){
      $http({
        method: 'DELETE',
        url: 'api/auth/removeadmin'
        // data: $scope.season
      }).then(function(res){
        console.log(res);
      }, function(res){
        console.log('AddAdminController remove error ' + res);
      });
    };
  }]);
};
