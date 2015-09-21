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
    });

    $urlRouterProvider.otherwise('/home');
});

starter.controller('areaCtrl', ['$scope', function($scope) {

  $scope.infos = {
    city: 'France'
  };

  $scope.selectCity = function() {
     
  };

}]);
