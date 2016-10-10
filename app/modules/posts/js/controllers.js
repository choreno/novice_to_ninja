(function () {
    'use strict';
    angular.module('posts.controllers', [])
        // .controller('FinanceController', ['$scope', FinanceController])
        // .controller('GreetingController', ['$scope', '$timeout' , GreetingContrller])
        .controller('MessageController', ['$scope', '$timeout', MessageController])
        .controller('StatsController', ['$scope', '$timeout', StatsController])


   


    function MessageController($scope, $timeout) {

        $scope.messages = [{
            sender: 'user1',
            text: 'Msg1'
        }];

        var timer;
        var count = 0;

        $scope.loadMessages = function () {
            count++;
            $scope.messages.push({
                sender: 'user1',
                text: 'Random message' + count
            });

            timer = $timeout($scope.loadMessages, 2000);
            if (count === 3) {
                $scope.$broadcast('EVENT_NO_DATA', 'Not Connected');
                $timeout.cancel(timer);
            };
        };

        timer = $timeout($scope.loadMessages, 2000);
        $scope.$on('EVENT_RECEIVED', function () {
            console.log('Received emitted event');

        })



    }


    function StatsController($scope, $timeout) {
        $scope.name = 'World';
        $scope.status = 'Connected';
        $scope.statusColor = 'green';

        $scope.$on('EVENT_NO_DATA', function (event, data) {
            console.log('received broadcasted event');
            $scope.status = data;
            $scope.statusColor = 'red';
            $scope.$emit('EVENT_RECEIVED');
        });

    }




})();