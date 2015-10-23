module.exports = function(app) {
  app.factory('alertService', ['$rootScope', '$timeout', function($rootScope, $timeout) {
    
    var alertService = {};
    $rootScope.alerts = {};

    //success-popup or sorry-popup
    alertService.add = function(type, msg) {
      $rootScope.alerts.type = type;
      $rootScope.alerts.msg = msg;
      $rootScope.alerts.exists = true;
      $timeout(function() {
        $rootScope.alerts.exists = false;
      }, 5000);
    };

    return alertService;
  }]);
};