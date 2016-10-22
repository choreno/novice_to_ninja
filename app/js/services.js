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





angular.module('mainApp').factory('weatherService',
    function ($http) {
        return {
            getWeather: function (city, country) {
                var query = city + ',' + country;
                // return $http.get('http://api.openweathermap.org/data/2.5/weather', {
                //     params: {
                //         q: query
                //     }

                return $http.get('https://echo.getpostman.com/delay/3')
                    .then(function (response) {
                        //return response.data.weather[0].description;
                        return response ;
                    });
            }
        }
    });



