// (function () {
//     'use strict';
//     angular.module('exampleApp')
//         .controller('defaultCtrl', ['$scope', defaultCtrl]);

//     function defaultCtrl($scope) {

//         $scope.products = [
//             { name: 'Apples', category: 'Fruit', price: '1.20', expiry: 10 },
//             { name: 'Bananas', category: 'Fruit', price: '2.42', expiry: 7 },
//             { name: 'Pears', category: 'Fruit', price: '2.02', expiry: 6 },
//         ];

//         $scope.incrementPrices = function () {
//             for (var i = 0; i < $scope.products.length; i++) {
//                 $scope.products[i].price++;
//             }
//         }


//     }
// })();


(function () {
    'use strict';
    angular.module('exampleApp')
        .controller('scopeCtrl', ['$scope', scopeCtrl]) ;
        // .controller('secondCtrl', ['$scope', secondCtrl]);

    function scopeCtrl($scope) {
        //do nothing        
        $scope.data={name: "Adam"};
        $scope.city="London";
    }

    // function secondCtrl($scope) {
    //     //do nothing        
    // }


})();
