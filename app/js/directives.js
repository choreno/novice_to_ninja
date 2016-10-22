'use strict'

angular.module('spBlogger.directives',[]);

angular.module('spBlogger.directives').directive('appVersion',['version',function(version){
	return {
		restrict: 'AE',
		link: function(scope,elem,attrs){
			elem.html(version);
		}
	}	
}]);

(function(){
	'use strict';
	angular.module('mainApp',[])
		.directive('helloWorld', [helloWorld]);

	function helloWorld() {
		return{
			restrict: 'AEC',
			replace: true,
			template: '<h3>Hello, World!</h3>'
		}
	}
})();


(function(){
	'use strict';
	angular.module('dirApp')
		.directive('helloWorld', ['', helloWorld]);

	function helloWorld() {
		return {

			restrict: 'AEC',
			replace:'true',
			template:'<p ng-click="clearMessage()">Hello,World! {{message}} </p>',
			link: function(scope,elem,attrs){
				scope.$watch('message', function(value){
					console.log('Message Changed');
				});

				scope.clearMessage = function(){
					scope.message=''; 
				}

				elem.bind('mouseover', function(){
					elem.css('cursor','pointer');
				})


			}
		}

	}
})();
