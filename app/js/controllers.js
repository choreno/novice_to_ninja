'use strict';

angular.module('myApp.Controllers', [])
    .controller('Controller1', function ($scope, $location, $state, $log) {
        $scope.message = "Hello, world";

        $scope.loadView2 = function () {
            $state.go('view2',{
                firstName: $scope.firstName,
                lastName: $scope.lastName
            })
            //$location.path('/view2/' + $scope.firstName + '/' + $scope.lastName);
        }


        $log.warn('ttt');







    })
    .controller('Controller2', function ($scope, $stateParams, names) {
        $scope.firstName = $stateParams.firstName;
        $scope.lastName = $stateParams.lastName;
        $scope.names = names;


    })

     .controller('scotchController', function ($scope, DATA_SOURCE) {

            $scope.message = DATA_SOURCE;

            $scope.scotches = [
                {
                    name: 'Macallan 12',
                    price: 50
                },
                {
                    name: 'Chivas Regal Royal Salute',
                    price: 10000
                },
                {
                    name: 'Glenfiddich 1937',
                    price: 20000
                }
            ];

        });