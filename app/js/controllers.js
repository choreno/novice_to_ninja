'use strict';

angular.module('myApp.Controllers', [])
    .controller('Controller1',function ($scope) {
        $scope.message = "Hello, world";
        
    })
    .controller('Controller2', function ($scope) {
        $scope.now = new Date();

    });