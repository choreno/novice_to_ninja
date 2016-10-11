(function () {
    'use strict';
    angular.module('myApp', ['ngRoute', 'myApp.Controllers'])

        .config(function ($routeProvider,$locationProvider) {

            $routeProvider
                .when('/view1', {
                    controller: 'Controller1',
                    templateUrl: 'partials/view1.html'
                })
                .when('/view2', {
                    controller: 'Controller2',
                    templateUrl: 'partials/view2.html'
                })
                .otherwise({ redirectTo: '/view1' });

            $locationProvider.html5Mode(true); 
        })


})();