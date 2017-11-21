angular.module('gym2go.controllers', [])

.controller('GymsCtrl', function($scope) {

})

//Proteinas
.controller('SuppsCtrl', function($scope, Chats,sharedCartService) {
	$scope.groups = [];
	//global variable shared between different pages. 
	var cart = sharedCartService.cart;

$scope.groups[0] = {
			name: "Proteinas",
			items: []
		};
	$scope.groups[0].items[0] = {
			img:"../img/Proteina1.jpg",
			marca: "BSN SYNTHA-6",
        		peso: "1kg",
			id: 1,
			precio: 10
		};
$scope.groups[0].items[1] = {
			img:"../img/Proteina2.jpg",
			marca: "NitroTech",
        		peso: "4lb",
			id: 2,
			precio: 10
		};
$scope.groups[0].items[2] = {
			img:"../img/Proteina3.jpg",
			marca: "Monster Whey",
        		peso: "2,2lb",
			id: 3,
			precio: 10
		};

//Aminoacidos
$scope.groups[1] = {
			name: "Aminoacidos",
			items: []
		};
	$scope.groups[1].items[0] = {
			img:"../img/Aminoacido1.jpg",
			marca: "Amino",
        		peso: "1kg",
			id: 4,
			precio: 10
		};

//Barras
$scope.groups[2] = {
			name: "Barras Energéticas",
			items: []
		};
	$scope.groups[2].items[0] = {
			img:"../img/Barra1.jpg",
			marca: "Isostar",
        		peso: "15g",
			id: 5,
			precio: 10
		};
//Creatina
$scope.groups[3] = {
			name: "Creatina",
			items: []
		};
	$scope.groups[3].items[0] = {
			img:"../img/Creatina1.jpg",
			marca: "CREATINA PLUS 5950",
        		peso: "200g",
			id: 6,
			precio: 10
		};
	$scope.groups[3].items[1] = {
			img:"../img/Creatina2.jpg",
			marca: "MICRONIZADA",
        		peso: "1kg",
			id: 7,
			precio: 10
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

	 //add to cart function
	 $scope.addToCart=function(id,image,name,price){   
		// function cart.add is declared in services.js
		cart.add(id,image,name,price,1);	
	 };	 
})

.controller('CartCtrl', function($scope,$ionicPopup,sharedCartService) {
  		// Loads the '$scope variable' cart i.e. 'HTML variable'
		$scope.$on('$stateChangeSuccess', function () {
			$scope.cart=sharedCartService.cart;
			$scope.total_qty=sharedCartService.total_qty;
			$scope.total_amount=sharedCartService.total_amount;		
		});
		
		//remove function
		$scope.removeFromCart=function(c_id){
			$scope.cart.drop(c_id);	 // deletes the product from cart. 
			
			// dynamically update the current $scope data.
			$scope.total_qty=sharedCartService.total_qty;
			$scope.total_amount=sharedCartService.total_amount;
			
		};
		
		// increments the qty
		$scope.inc=function(c_id){
			$scope.cart.increment(c_id);
			$scope.total_qty=sharedCartService.total_qty;
			$scope.total_amount=sharedCartService.total_amount;
		};
		
		// decrements the qty
		$scope.dec=function(c_id){
			$scope.cart.decrement(c_id);
			$scope.total_qty=sharedCartService.total_qty;
			$scope.total_amount=sharedCartService.total_amount;
		};
		
		$scope.checkout=function(){
			if($scope.total_amount>0){
				$state.go('checkOut');  // used to move to checkout page.
			}
			else{
				//alerts the user that cart is empty.
				var alertPopup = $ionicPopup.alert({
					title: 'No item in your Cart',
					template: 'Please add Some Items!'
				});
			}
		};
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


.controller('RopaCtrl', function($scope, Chats,sharedCartService) {
	$scope.groups = [];
	//global variable shared between different pages. 
	var cart = sharedCartService.cart;

$scope.groups[0] = {
			name: "Remeras",
			items: []
		};
	$scope.groups[0].items[0] = {
			img:"../img/shirt-rosa-mujer.jpg",
			marca: "Reebok",
			name: "Remera Dry Fit - Mujer",
			f: true,
			id: 1,
			precio: 10
		};
$scope.groups[0].items[1] = {
			img:"../img/shirt-azul-varon.jpeg",
			marca: "Nike",
			name: "Remera Dry Fit - Hombre",
			f: true,
			id: 2,
			precio: 10
		};

$scope.groups[1] = {
			name: "Tops",
			items: []
		};
	$scope.groups[1].items[0] = {
			img:"../img/admitone-Top-rojo.png",
			marca: "Admitone",
			name: "Top Rojo de tiras finas",
			f: false,
			id: 3,
			precio: 10
		};
	$scope.groups[1].items[1] = {
		img:"../img/admitone-Top-rojo.png",
		marca: "Adidas",
		name: "Top Negro",
		f: false,
		id: 4,
		precio: 10
	};

$scope.groups[2] = {
			name: "Shorts",
			items: []
		};
	$scope.groups[2].items[0] = {
			img:"../img/women-short-black.jpg",
			marca: "Nike",
			name: "Short Femenino Negro",
			id: 5,
			precio: 10
		};
	$scope.groups[2].items[0] = {
		img:"../img/short-blakc-men.jpg",
		marca: "Nike",
		name: "Short Masculino Negro",
		f: false,
		id: 6,
		precio: 10
	};
$scope.groups[3] = {
			name: "Calsas",
			items: []
		};
	$scope.groups[3].items[0] = {
			img:"../img/Barra1.jpg",
			marca: "Reebok",
			name: "Calsa Femeninas Violetas",
			f: true,
			id: 7,
			precio: 10
		};
	$scope.groups[3].items[0] = {
		img:"../img/Barra1.jpg",
		marca: "Reebok",
		name: "Calsa 3/4 Masculinas ",
		f: true,
		id: 8,
		precio: 10
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

	$scope.showConfirm = function(ev,name,femenino) {
    	// Appending dialog to document.body to cover sidenav in docs app
		var genero = femenino ? 'una ' : 'un ';
		var genero2 = femenino ? 'la ' : 'el ';
    	var confirm = $mdDialog.confirm()
          .title('Indumentaria')
          .textContent('Desea alquilar ' + genero  + name)
          .ariaLabel('Alquiler indumentaria')
          .targetEvent(ev)
          .ok('Alquilar')
          .cancel('Cancelar')
		  .closeTo({
         	 left: 1500
		   });

    	$mdDialog.show(confirm).then(function() {
			$mdDialog.show(
				$mdDialog.alert()
					.parent(angular.element(document.querySelector('#listItems')))
					.clickOutsideToClose(true)
					.title('Agregado')
					.textContent('Se agrego ' + genero2 + name + ' a su alquiler')
					.ariaLabel('Confirmacion alquiler')
					.ok('Ok')
					.targetEvent(ev)
			);
		}, function() {
      		//TODO cancel -> nothing
    	});
  };	 
})