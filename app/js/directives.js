// (function () {
// 	'use strict';
// 	angular.module('exampleApp')
// 		.directive('unorderedList', [unorderedList]);

// 	function unorderedList() {
// 		return {
// 			restrict: 'AE',
// 			// templateUrl: function(element, attrs){ //no scope allowed???

// 			// 	return attrs['template'] == 'table' ?  './TemplateViews/tableTemplate.html' : './TemplateViews/itemTemplate.html'
// 			// },
// 			templateUrl: './TemplateViews/tableTemplate.html',
// 			// replace: true,
// 			link: function (scope, element, attrs) {
// 				scope.data = scope[attrs['unorderedList']]; //get the ctrl's scope data ???
// 			}


// 		}
// 	}
// })();



(function () {
	'use strict';
	angular.module('exampleApp')
		.directive('scopeDemo', [scopeDemo]);

	function scopeDemo() {
		return {
			restrict: 'A',
			template: function () {
				return angular.element(document.querySelector("#scopeTemplate2")).html();
			},
			scope: {
				local: '=nameprop',
				cityFn: '&city'
			}

		}
	}
})();


(function () {
	'use strict';
	angular.module('exampleApp')
		.directive('panel', [panel]);

	function panel() {
		return {
			restrict: 'AE',

			link: function (scope, element, attrs) {
				scope.dataSource = "directive";
			},
			scope: false,
			transclude: true,
			template: function () {
				return angular.element(document.querySelector('#template')).html();
			}
		}
	}
})();


(function () {
	'use strict';
	angular.module('exampleApp')
		.directive('productItem', [productItem]);

	function productItem() {
		return {
			template: function () {
				return angular.element(document.querySelector('#productTemplate')).html();
			},
			require: '^productTable',
			link: function(scope,element,attrs,ctrl){
				scope.$watch('item.quantity', function(){
					ctrl.updateTotal(); 
				})
			}
		}
	}
})();

(function(){
	'use strict';
	angular.module('exampleApp')
		.directive('productTable', [productTable]);

	function productTable(){
		return{
			transclude: true,
			scope:{
				value: '=productTable',
				data: '=productData'
			},
			controller: function($scope,$element,$attrs){
				this.updateTotal = function(){	
					var total = 0 ;
					for (var i = 0; i < $scope.data.length; i++) {
						total += Number($scope.data[i].quantity) ;
						
					}
					$scope.value = total; 
				}
			} 
			

		}
	}
})();