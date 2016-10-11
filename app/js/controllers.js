'use strict';

angular.module('myApp.Controllers', [])
    .controller('Controller1', function ($scope, $location) {
        $scope.message = "Hello, world";

        $scope.loadView2 = function () {
            $location.path('/view2/' + $scope.firstName + '/' + $scope.lastName);
        }
    })
    .controller('Controller2', function ($scope, $routeParams, names) {
        $scope.firstName = $routeParams.firstName;
        $scope.lastName = $routeParams.lastName;
        $scope.names = names;


    });