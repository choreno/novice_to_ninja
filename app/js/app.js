(function () {
    'use strict';

    //this one allows any kind of urls, but does not work, always show the /posts UI
    angular.module('spBlogger', ['spBlogger.posts', 'spBlogger.admin'])
        .run(['$state', function ($state) {
            $state.go('allPosts');
        }
        ]);



    // //Which one is better ???  -- this one always shows /posts url whatever typed in url
    // angular.module('spBlogger', ['spBlogger.posts'])
    //     .config(function ($urlRouterProvider) {
    //         $urlRouterProvider.otherwise('/posts');
    //     })

})();

(function () {
    'use strict';
    angular.module('myApp', [])
        .controller('UserController', ['$scope', UserController]);

    function UserController($scope) {
        var vm = this;

        // $scope.user = {};
        // $scope.countries = [{
        //     id: 'US',
        //     desc: 'United States'
        // },
        // {
        //     id: 'GB',
        //     desc: 'United Kingdom'
        // }];

        // $scope.saveUser = function(){
        //     if($scope.myform.$valid){
        //         console.log('saving user');

        //     }
        //     else{
        //         console.log('unable to save');

        //     }

        // }

        var users = [
            {
                name: 'Chris',
                email: ''
            },
            {
                name: 'Holly',
                email: ''
            }
        ];

        // assign this data to an object to store all our form data
        $scope.formData = {};
        $scope.formData.users = users;



    }



})();

// //Asynchronous REST API example

// (function(){
//     'use strict';
//     angular.module('mainApp',[])
//         .controller('MainController', ['$scope', '$q', '$interval', MainController]);

//     function MainController ($scope, $q, $interval) {
//         var vm = this;

//         $scope.getPromise = function(){
//             var i = 0 ; 

//             //var cancelRequested = false; 

//             var deferred = $q.defer();

//             var timer = $interval(function(){
//                 if(!!$scope.cancelRequested){
//                     deferred.reject('Promise rejected due to cancellation.');
//                     $interval.cancel(timer);

//                 }

//                 i=i+1; 
//                 if(i==5){
//                     deferred.resolve('Counter has reached to 5'); 
//                     $interval.cancel(timer);

//                 }else{
//                     deferred.notify('Counter has reached ' + i );
//                 }

//             }, 1000); 

//             return deferred.promise; 

//             // //Always return reject for test purpose

//             // return $q.reject('Reject reason ????')

//         };

//         $scope.getAsyncMessage = function(){
//             var promise = $scope.getPromise();
//             promise.then(function(message){
//                 $scope.status = 'Resolved:' + message; 
//             }, function(message){
//                 $scope.status = 'REJECTED: ' + message;
//                 $scope.cancelRequested = false; //Reset the promise reject trigger variable
//             }, function(message){
//                 $scope.status = 'Notifying: ' + message;
//             })
//         }



//     }
// })();


// (function(){
//     'use strict';
//     angular.module('mainModule',[])
//         .controller('TestController', ['$scope','customService', TestController]);

//     function TestController ($scope, customService) {
//         var vm = this;
//         $scope.getData = function(){
//             customService.getData()
//                 .then(function(data, status, config, headers){
//                     console.log('Response from server' + data );

//                 }, function(data, status, config, headers){
//                     console.log('Some error occurred')
//                 });

//                 //Or add success or error
//             customService.getData()
//             .success(function(data, status, config, headers){
//                 console.log('Response from server' + data );
//             })
//             .error(function(data, status, config, headers){
//                 console.log('Some error occurred')
//             })

//         }

//     }
// })();

//api.openweathermap.org/data/2.5/weather?zip=94040,us








// angular.module('mainApp', []).controller('WeatherController',['$scope','weatherService', 
//     function ($scope, weatherService) {
//         $scope.getWeather = function () {
//             $scope.weatherDescription = "Fetching . . .";
//             weatherService.getWeather($scope.city, $scope.country)
//                 .then(function (data) {
//                     $scope.weatherDescription = data;
//                 }, function () {
//                     $scope.weatherDescription = "Could not obtain data";
//                 });
//         }
//     }])
//     .factory('weatherService', ['$http', function ($http) {
//         return {
//             getWeather: function (city, country) {
//                 var query = city + ',' + country;
//                 // return $http.get('http://api.openweathermap.org/data/2.5/weather', {
//                 //     params: {
//                 //         q: query
//                 //     }

//                 return $http.get('https://echo.getpostman.com/delay/3')
//                     .then(function (response) {
//                         //return response.data.weather[0].description;
//                         return response;
//                     });
//             }
//         }
//     }])

//     ;












// angular.
//     module('myServiceModule', []).
//     controller('MyController', ['$scope', 'notify', function ($scope, notify) {
//         $scope.callNotify = function (msg) {
//             notify(msg);
//         };
//     }]).
//     factory('notify', ['$window', function (win) {
//         var msgs = [];
//         return function (msg) {
//             msgs.push(msg);
//             if (msgs.length === 3) {
//                 win.alert(msgs.join('\n'));
//                 msgs = [];
//             }
//         };
//     }]);


// angular.module('mainApp',[]);



(function(){
    'use strict';
    angular.module('dirApp',[])
        .controller('MainController', ['$scope', MainController]);

    function MainController($scope) {
        $scope.message = 'I love angularJS'; 
    }
})();