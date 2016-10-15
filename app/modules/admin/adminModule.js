(function(){
    'use strict';
    angular.module('spBlogger.admin',[])
        .config(['$stateProvider'], Config)

    function Config($stateProvider){
        
        $stateProvider
            .state('admin',{
                url: '/admin',
                abstract: true,
                controller: 'AdminController',
                templateUrl: 'modules/admin/views/admin-home.html'
            })
            .state('admin.postNew',{
                url: '/posts/new',
                controller: 'PostCreationController',
                templateUrl: 'modules/admin/views/admin-new-post.html'
            })
            .state('admin.postUpdate',{
                url: '/posts/:id/edit',
                controller: 'PostUpdateController',
                templateUrl: 'modules/admin/views/admin-update.html'
            })
            .state('admin.postViewAll',{
                url: '',
                controller: 'PostListController',
                templateUrl: 'modules/admin/views/admin-all-posts.html'
            })

    }
})();