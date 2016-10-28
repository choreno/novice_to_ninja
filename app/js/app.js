(function(){
    'use strict';
    angular.module('exampleApp',[])
        .controller('defaultCtrl', ['$scope', defaultCtrl]);

    function defaultCtrl($scope) {
        $scope.products = [
            {name: 'Apples', category:'Fruit', price:'1.20', expiry: 10},
            {name: 'Bananas', category:'Fruit', price:'2.42', expiry: 7},
            {name: 'Pears', category:'Fruit', price:'2.02', expiry: 6},
        ]
    }
})();




