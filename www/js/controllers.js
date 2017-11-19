angular.module('gym2go.controllers', [])

.controller('GymsCtrl', function($scope) {

})

//Proteinas
.controller('SuppsCtrl', function($scope, Chats) {
	$scope.groups = [];

$scope.groups[0] = {
			name: "Proteinas",
			items: []
		};
	$scope.groups[0].items[0] = {
			img:"../img/Proteina1.jpg",
			marca: "BSN SYNTHA-6",
        		peso: "1kg"
		};
$scope.groups[0].items[1] = {
			img:"../img/Proteina2.jpg",
			marca: "NitroTech",
        		peso: "4lb"
		};
$scope.groups[0].items[2] = {
			img:"../img/Proteina3.jpg",
			marca: "Monster Whey",
        		peso: "2,2lb"
		};

//Aminoacidos
$scope.groups[1] = {
			name: "Aminoacidos",
			items: []
		};
	$scope.groups[1].items[0] = {
			img:"../img/Aminoacido1.jpg",
			marca: "Amino",
        		peso: "1kg"
		};

//Barras
$scope.groups[2] = {
			name: "Barras Energéticas",
			items: []
		};
	$scope.groups[2].items[0] = {
			img:"../img/Barra1.jpg",
			marca: "Isostar",
        		peso: "15g"
		};
//Creatina
$scope.groups[3] = {
			name: "Creatina",
			items: []
		};
	$scope.groups[3].items[0] = {
			img:"../img/Creatina1.jpg",
			marca: "CREATINA PLUS 5950",
        		peso: "200g"
		};
	$scope.groups[3].items[1] = {
			img:"../img/Creatina2.jpg",
			marca: "CREATINA MICRONIZADA",
        		peso: "1kg"
		};
	/*
	* if given group is the selected group, deselect it
	* else, select the given group
	*/
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
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
