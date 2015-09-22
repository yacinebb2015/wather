// Ionic Starter App

var starter = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


starter.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: function($scope) {

      }
    }).
    state('area', {
      url: '/area',
      templateUrl: 'templates/area.html',
      controller: 'areaCtrl'

    }).
    state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    })
    .state('wather', {
      url: '/wather',
      templateUrl: 'templates/wather.html'
    });

    $urlRouterProvider.otherwise('/home');
});

starter.controller('areaCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $scope.infos = {
    city: ''
  };

  $scope.selectCity = function() {

    $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + $scope.infos.city)
    .then(function(response) {
      var results = response.data.results[0];
      $location.url('/wather');
    });     
  };

}]);
