module.exports = function(app) {
  app.controller('SignInController', ['$scope', '$http', '$location', '$cookies', '$base64', 'alertService', '$state', function($scope, $http, $location, $cookies, $base64, alertService, $state) {
    $scope.user = {};
    $scope.forms = {};
    $scope.error = '';

    $scope.login = function() {
       $http({
        method: 'GET',
        url: '/api/auth/signin',
        headers: {
          'Authorization': 'Basic ' + $base64.encode($scope.user.email + ':' + $scope.user.password)
        }
      })
      .then(function(res) {
        $cookies.put('token', res.data.token);
        $cookies.put('role', res.data.role);
        $cookies.put('email', $scope.user.email);
        $scope.loggedIn();
        alertService.add('success-popup', 'You Successfully Loged In');
        $state.go('home');
      }, function(res) {
        alertService.add('sorry-popup', res.data.msg);
        
      });
    };
  }]);
};
