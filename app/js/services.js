'use strict'

angular.module('spBlogger.services',[]);

angular.module('spBlogger.services').value('version','V1.0');


(function(){
    'use strict';
    angular.module('mainModule',[])
        .service('customService', ['$http', customService]);

    function customService ($http) {
        var vm = this;
        this.getData = function(){
            return $http({
                method:'GET',
                url: '/api'
            })
        }

    }
})();
