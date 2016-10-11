(function () {
    'use strict';
    angular.module('myApp', ['myApp.Controllers','ui.router'])

        .config(function ($stateProvider,$urlRouterProvider, $locationProvider) {

            $stateProvider
                .state('view1', {
                    url: '/view1',
                    controller: 'Controller1',
                    templateUrl: 'partials/view1.html'
                })
                // .state('view2', {
                //     url: '/view2',
                //     controller: 'Controller2',
                //     templateUrl: 'partials/view2.html'
                // })
                .state('view2', {
                    url: '/view2/:firstName/:lastName',
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
                            }, 1000)
                        }

                    }
                });

                $urlRouterProvider.otherwise('/view1') 


                // .otherwise({ 
                //     redirectTo: '/view1' 
                // })                
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

