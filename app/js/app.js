(function () {
    'use strict';

    angular.module('spBlogger', ['spBlogger.posts'])
        .run(['$state', function ($state) {
            $state.go('allPosts');
        }
        ]);


})();

