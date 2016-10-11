(function () {
    'use strict';
    angular.module('myApp', ['ngRoute', 'myApp.Controllers'])

        .config(function ($routeProvider, $locationProvider) {

            $routeProvider
                .when('/view1', {
                    controller: 'Controller1',
                    templateUrl: 'partials/view1.html'
                })
                .when('/view2', {
                    controller: 'Controller2',
                    templateUrl: 'partials/view2.html'
                })
                .when('/view2/:firstName/:lastName', {
                    controller: 'Controller2',
                    templateUrl: 'partials/view2.html',
                    resolve: {

                        //  names: function(){
                        //      return ['a','b'];
                        //  }

                        //Adding the timeout delay 
                        names: function ($timeout) {
                            return $timeout(function () {
                                return ['Voji', 'Jazee', 'WangZaZi']
                            }, 2000)
                        }

                    }
                })
                .otherwise({ 
                    redirectTo: '/view1' 
                })                
                // .otherwise({ 
                //     redirectTo: '/view1' 
                // })

                // .otherwise(
                // {
                //     template: "<h1>None</h1><p>Nothing has been selected,</p>"
                // }
                // )
                ;

            $locationProvider.html5Mode(true);
        });


})();

