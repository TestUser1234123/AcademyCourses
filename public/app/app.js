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

        $scope.courses = [
            {name: 'lorem ipsum01', featured: true, published: new Date('05/25/2018')},
            {name: 'lorem ipsum02', featured: true, published: new Date('06/16/2018')},
            {name: 'lorem ipsum03', featured: false, published: new Date('06/06/2018')},
            {name: 'lorem ipsum04', featured: true, published: new Date('09/02/2018')},
            {name: 'lorem ipsum05', featured: true, published: new Date('09/03/2018')},
            {name: 'lorem ipsum06', featured: false, published: new Date('08/31/2018')},
            {name: 'lorem ipsum07', featured: true, published: new Date('02/29/2018')},
            {name: 'lorem ipsum08', featured: false, published: new Date('01/29/2018')},
            {name: 'lorem ipsum09', featured: true, published: new Date('07/18/2018')},
            {name: 'lorem ipsum10', featured: false, published: new Date('07/05/2018')},
            {name: 'lorem ipsum11', featured: true, published: new Date('03/05/2018')},
            {name: 'lorem ipsum12', featured: false, published: new Date('08/04/2018')},
            {name: 'lorem ipsum13', featured: true, published: new Date('08/23/2018')},
            {name: 'lorem ipsum14', featured: true, published: new Date('08/25/2018')},
            {name: 'lorem ipsum15', featured: false, published: new Date('01/17/2018')},
            {name: 'lorem ipsum16', featured: true, published: new Date('01/12/2018')},
        ];
    });
}());