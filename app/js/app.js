(function(){
    'use strict';
    angular.module('myApp', ['postsModule']) ;

    angular.module('myApp').run(function($rootScope){
        $rootScope.title = 'Famouse Books';
    })



})();