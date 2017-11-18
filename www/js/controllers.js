angular.module('gym2go.controllers', [])

.controller('GymsCtrl', function($scope) {

})

.controller('SuppsCtrl', function($scope, Chats) {
  
})

.controller('CartCtrl', function($scope) {
  
})

.controller('LoginCtrl', function($scope, $state) {
  $scope.doLogin = function() {
    $state.go("tab.gyms")
  };
})

.controller('AppCtrl', function($scope, $state) {
  $scope.logout = function() {
    $state.go("login")
  };
})

.controller('SingleGymCtrl', function($scope, $state) {
  $scope.goBack = function() {
    $state.go("tab.gyms")
  };
})