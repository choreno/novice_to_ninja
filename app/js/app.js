(function () {
    'use strict';
    angular.module('myApp', ['myApp.Controllers', 'ui.router'])

        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'Controller1',
                    templateUrl: 'partials/home.html'
                })
                .state('home.list', {
                    url: '/list',
                    controller: function ($scope) {
                        $scope.dogs = ['Barnese', 'Husky', 'Goldendoodle'];
                    },
                    templateUrl: 'partials/home-list.html'
                })
                .state('home.paragraph', {
                    url: '/paragraph',
                    template: 'I could sure use a drink right now.'
                })

                .state('about', {
                    url: '/about',
                    views: {
                        //parent template
                        '': {
                            templateUrl: 'partials/about.html'
                        },
                        'columnOne@about': {
                            template: 'Look I am a column'
                        },
                        'columnTwo@about': {
                            templateUrl: 'partials/table-data.html',
                            controller: 'scotchController'
                            //template: 'Look I am a 2nd column'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/home');

            //$locationProvider.html5Mode(true);
        })
       


})();

