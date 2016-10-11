'use strict';

angular.module('myApp.Controllers', [])
    .controller('Controller1', function ($scope, $location, $state) {
        $scope.message = "Hello, world";

        $scope.loadView2 = function () {
            $state.go('view2',{
                firstName: $scope.firstName,
                lastName: $scope.lastName
            })
            //$location.path('/view2/' + $scope.firstName + '/' + $scope.lastName);
        }
    })
    .controller('Controller2', function ($scope, $stateParams, names) {
        $scope.firstName = $stateParams.firstName;
        $scope.lastName = $stateParams.lastName;
        $scope.names = names;


    });