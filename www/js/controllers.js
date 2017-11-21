angular.module('gym2go.controllers', [])

  .controller('GymsCtrl', function ($scope) {

  })

  //Proteinas
  .controller('SuppsCtrl', function ($scope, Chats, sharedCartService) {
    $scope.groups = [];
    $scope.compras={};
    //global variable shared between different pages.
    var cart = sharedCartService.cart;

    $scope.groups[0] = {
      name: "Proteinas",
      items: []
    };
    $scope.groups[0].items[0] = {
      img: "../img/Proteina1.jpg",
      marca: "BSN SYNTHA-6",
      peso: "1kg",
      id: 1,
      precio: 10,
      cantidad: 0
    };
    $scope.groups[0].items[1] = {
      img: "../img/Proteina2.jpg",
      marca: "NitroTech",
      peso: "4lb",
      id: 2,
      precio: 10,
      cantidad: 0
    };
    $scope.groups[0].items[2] = {
      img: "../img/Proteina3.jpg",
      marca: "Monster Whey",
      peso: "2,2lb",
      id: 3,
      precio: 10,
      cantidad: 0
    };

//Aminoacidos
    $scope.groups[1] = {
      name: "Aminoacidos",
      items: []
    };
    $scope.groups[1].items[0] = {
      img: "../img/Aminoacido1.jpg",
      marca: "Amino",
      peso: "1kg",
      id: 4,
      precio: 10,
      cantidad: 0
    };

//Barras
    $scope.groups[2] = {
      name: "Barras Energéticas",
      items: []
    };
    $scope.groups[2].items[0] = {
      img: "../img/Barra1.jpg",
      marca: "Isostar",
      peso: "15g",
      id: 5,
      precio: 10,
      cantidad: 0
    };
    //Creatina
    $scope.groups[3] = {
      name: "Creatina",
      items: []
    };
    $scope.groups[3].items[0] = {
      img: "../img/Creatina1.jpg",
      marca: "CREATINA PLUS 5950",
      peso: "200g",
      id: 6,
      precio: 10,
      cantidad: 0
    };
    $scope.groups[3].items[1] = {
      img: "../img/Creatina2.jpg",
      marca: "MICRONIZADA",
      peso: "1kg",
      id: 7,
      precio: 10,
      cantidad: 0
    };
    /*
    * if given group is the selected group, deselect it
    * else, select the given group
    */
    $scope.toggleGroup = function (group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function (group) {
      return $scope.shownGroup === group;
    };

    //add to cart function
    $scope.addToCart = function (id, image, name, price, quantity) {
      // function cart.add is declared in services.js
      cart.add(id, "../img/Barcode.jpg", name, price, quantity);
    };
  })

  .controller('CartCtrl', function ($scope, $ionicPopup, sharedCartService) {
    // Loads the '$scope variable' cart i.e. 'HTML variable'
    $scope.$on('$stateChangeSuccess', function () {
      $scope.cart = sharedCartService.cart;
      $scope.total_qty = sharedCartService.total_qty;
      $scope.total_amount = sharedCartService.total_amount;
    });

    $scope.expandItem = function(item) {
      if ($scope.isItemExpanded(item)) {
        $scope.shownItem = null;
      } else {
        $scope.shownItem = item;
      }
    };
    $scope.isItemExpanded = function(item) {
      return $scope.shownItem === item;
    };
  })

  .controller('LoginCtrl', function ($scope, $state) {
    $scope.doLogin = function () {
      $state.go("tab.gyms")
    };
  })

  .controller('AppCtrl', function ($scope, $state) {
    $scope.logout = function () {
      $state.go("login")
    };
  })

  .controller('SingleGymCtrl', function ($scope, $state, $ionicPopup, ionicDatePicker) {
    $scope.goBack = function () {
      $state.go("tab.gyms")
    };

    $scope.goToPersonalTrainerList = function () {
      $state.go("tab.personalTrainerList")
    }

    $scope.activities = [
      {
        name: "Pase Gimnasio",
        price: "$50"
      },
      {
        name: "Clase MMA",
        price: "$30"
      },
      {
        name: "Clase Zumba",
        price: "$20"
      }

    ];

    $scope.toggleActivity = function (activity) {
      if ($scope.isActivityShown(activity)) {
        $scope.shownActivity = null;
      } else {
        $scope.shownActivity = activity;
      }
    };
    $scope.isActivityShown = function (activity) {
      return $scope.shownActivity === activity;
    };

    $scope.addActivity = function (activity) {
      $ionicPopup.confirm({
        title: 'Confirmar selección',
        template: '<div><p><strong>' + activity.name + '</strong></p>Precio: ' + activity.price + '<br>Fecha: ' + $scope.selectedDate + '<br>Hora: 19:00hs</div>',
        okText: 'Continuar',
        cancelText: 'Cancelar'
      })
      .then(function(confirmed) {
        if (confirmed) {
          $scope.goToPersonalTrainerList();
        }
      })
    };

    var ipObj1 = {
      callback: function (val) {  //Mandatory 
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
        var date = new Date(val);

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        $scope.selectedDate = day+'/'+month+'/'+year;;
      },
      from: new Date(2017, 10, 23), //Optional 
      to: new Date(2019, 10, 30), //Optional 
      inputDate: new Date(),      //Optional 
      titleLabel: 'Select a Date',
      mondayFirst: true,          //Optional 
      disableWeekdays: [0],       //Optional 
      closeOnSelect: false,       //Optional 
      templateType: 'popup',
      setLabel: 'Elegir',
      closeLabel: 'Cerrar'
    };
 
    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };

  })

  //Personal Trainers
  .controller('PersonalCtrl', function ($scope, $ionicPopup, $state) {
    $scope.trainers = [{
      name: "Juan Perez",
      age: "29 años",
      profileImage: "../img/personal1.png",
      speciality: "Musculación en general",
      price: 50
      },
      {
        name: "Federico Romo",
        age: "35 años",
        profileImage: "../img/personal2.jpg",
        speciality: "Running",
        price: 50
      },
      {
        name: "Carla Mi",
        age: "31 años",
        profileImage: "../img/personal3.jpeg",
        speciality: "Boxeo",
        price: 50
      },
      {
        name: "Lucas Gonzalez",
        age: "28 años",
        profileImage: "../img/personal4.jpg",
        speciality: "Musculación en general",
        price: 50
      }];
    /*
    * if given group is the selected group, deselect it
    * else, select the given group
    */
    $scope.addPersonal = function (personal) {
      $ionicPopup.confirm({
        title: 'Confirmar selección',
        template: '<div><p>' + personal.name + '</p><strong>Precio: $' + personal.price + '</strong></div>',
        okText: 'Continuar',
        cancelText: 'Cancelar'
      })
      .then(function(confirmed) {
        if (confirmed) {
          // TODO - Add redirection to clothes selection screen
          //$state.go(tab.clothes)
        }
      })
    };
  });
