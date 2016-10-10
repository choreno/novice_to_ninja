'use strict';

angular.module('myApp', [])
    .controller('Controller1',function ($scope) {
        $scope.message = "Hello, world";
    })
    .controller('Controller2', function ($scope) {
        $scope.now = new Date();
    });