(function () {
    'use strict';
    angular.module('posts.controllers', [])
        .controller('FinanceController', ['$scope', FinanceController])
        .controller('GreetingController', ['$scope', '$timeout' , GreetingContrller]);




    function Car(col, steering) {
        this.col = col;
        this.steering = steering;
    }

    Car.prototype.year = 2012;

    var car = new Car('red', 'left');
    console.log(car.col);
    console.log(car.year);
    console.log(car.hasOwnProperty('col'));



    function FinanceController($scope) {
        $scope.salary = 0;
        $scope.percentage = 0;
        $scope.result = function () {
            return $scope.salary * $scope.percentage * 0.01;
        }
        $scope.greeting = 'Yeo!!'
    }


    function GreetingContrller($scope, $timeout) {
        $scope.now = new Date();
        $scope.greeting = 'Hello';
        
        $scope.scheduleTask = function () {

          $timeout(function(){
              $scope.message = "Fetched after 3 seccccc"
          },3000)  
            // $scope.message = '......';
            
            // setTimeout(function () {

            //     $scope.$apply(function () { // wrapped the code in $apply()
            //         $scope.message = 'Fetched after 3 seconds';
            //         console.log('message=' + $scope.message); //log this to console
            //     });
            //     }, 3000);
        }
    }







})();