(function () {
    'use strict';

    //this one allows any kind of urls, but does not work, always show the /posts UI
    angular.module('spBlogger', ['spBlogger.posts'])
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

(function(){
    'use strict';
    angular.module('myApp',[])
        .controller('UserController', ['$scope', UserController]);

    function UserController($scope) {
         var vm = this;

        $scope.user = {};
        $scope.countries = [{
            id: 'US',
            desc: 'United States'
        },
        {
            id: 'GB',
            desc: 'United Kingdom'
        }];

        $scope.saveUser = function(){
            if($scope.myform.$valid){
                console.log('saving user');
                
            }
            else{
                console.log('unable to save');
                
            }

        }


    }
})();

