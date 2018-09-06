(function() {
    'use strict';
    var app = angular.module('app', ['ngResource', 'ngRoute']);
    app.config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
           });
    
        $routeProvider
           .when('/', {
               templateUrl: '/partials/home',
               controller: 'MainController'
           })
    });

    app.controller('MainController', function($scope) {
        $scope.hello = 'Hello from angular';
    });
}());