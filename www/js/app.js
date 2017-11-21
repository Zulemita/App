// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('gym2go', ['ionic', 'gym2go.controllers', 'gym2go.services', 'ngCordova', 'ngMap'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.backButton.previousTitleText(false).text('');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'AppCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.gyms', {
    url: '/gyms',
    views: {
      'gyms-tab': {
        templateUrl: 'templates/tab-gyms.html',
        controller: 'GymsCtrl'
      }
    }
  })

  .state('tab.McGym', {
    url: '/McGym',
    views: {
      'gyms-tab': {
        templateUrl: 'templates/gyms/tab-McGym.html',
        controller: 'SingleGymCtrl'
      }
    }
  })

  .state('tab.GymFiuba', {
    url: '/GymFiuba',
    views: {
      'gyms-tab': {
        templateUrl: 'templates/gyms/tab-GymFiuba.html',
        controller: 'SingleGymCtrl'
      }
    }
  })

  .state('tab.GymBelgrano', {
    url: '/GymBelgrano',
    views: {
      'gyms-tab': {
        templateUrl: 'templates/gyms/tab-GymBelgrano.html',
        controller: 'SingleGymCtrl'
      }
    }
  })

  .state('tab.GymIndep', {
    url: '/GymIndep',
    views: {
      'gyms-tab': {
        templateUrl: 'templates/gyms/tab-GymIndep.html',
        controller: 'SingleGymCtrl'
      }
    }
  })

  .state('tab.GymST', {
    url: '/GymST',
    views: {
      'gyms-tab': {
        templateUrl: 'templates/gyms/tab-GymST.html',
        controller: 'SingleGymCtrl'
      }
    }
  })


  .state('tab.supps', {
      url: '/supps',
      views: {
        'tab-supps': {
          templateUrl: 'templates/tab-supps.html',
          controller: 'SuppsCtrl'
        }
      }
    })

  .state('tab.cart', {
    url: '/cart',
    views: {
      'tab-cart': {
        templateUrl: 'templates/tab-cart.html',
        controller: 'CartCtrl'
      }
    }
  })

  .state('tab.clothes', {
    url: '/clothes',
    views: {
      'tab-cart': {
        templateUrl: 'templates/tab-ropa.html',
        controller: 'RopaCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});

app.controller('GymsCtrl', function($scope, $state, $cordovaGeolocation) {
  /*$ngMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });*/
  /*var gyms = [
    { name: 'Gym1', dir: 'Paseo colonn 720', latitude : -34.616321, longitude: -58.368526 },
    { name: 'Gym2', dir: 'Paseo colonn 910', latitude : -34.618634, longitude: -58.369471 }
  ]
  var personMarker = {
    url: "../img/person-marker.png",
    size: new google.maps.Size(626, 626),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 313),
    scaledSize: new google.maps.Size(50, 50)
  }

  var gymMarker = {
    url: "./../img/gym-marker.png",
    size: new google.maps.Size(227, 205),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(113, 205),
    scaledSize: new google.maps.Size(50, 50)
  }

  function makeMarker(map, position, animation, image )
  {
    return new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: position,
      icon: image
    }); 
  }

  var markers = []
  var infoPositons = []
  var yourPosition;
  function startMap( latLng, startPosition )
  { 
      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
  
      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
      google.maps.event.addListenerOnce($scope.map, 'idle', function(){
          if( startPosition )
          {
            yourPosition = makeMarker($scope.map,latLng,personMarker);  
          }
        
          for ( var i = 0; i < gyms.length; i++ )
          {
            var gym = gyms[i];
            var marker = makeMarker($scope.map,{lat: gym.latitude, lng: gym.longitude},gymMarker);
            markers.push(marker)
            var infoWindow = new google.maps.InfoWindow({
              content: gym.name + ": " + gym.dir
            });

            infoPositons.push(infoWindow);

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open($scope.map, marker);
            });
          }      
      });
  }
  var options = {timeout: 10000, enableHighAccuracy: true};
  
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    startMap(latLng,true)
  }, function(error){
    var latLng = new google.maps.LatLng(-34.617751,-58.367862 );
    startMap(latLng,true)
  });*/
});
