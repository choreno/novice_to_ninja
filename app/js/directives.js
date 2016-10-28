(function () {
	'use strict';
	angular.module('exampleApp')
		.directive('unorderedList', [unorderedList]);

	function unorderedList() {
		return {
			restrict: 'AE',
			// templateUrl: function(element, attrs){ //no scope allowed???

			// 	return attrs['template'] == 'table' ?  './TemplateViews/tableTemplate.html' : './TemplateViews/itemTemplate.html'
			// },
			templateUrl: './TemplateViews/tableTemplate.html',
			// replace: true,
			link: function (scope, element, attrs) {
				scope.data = scope[attrs['unorderedList']]; //get the ctrl's scope data ???
			}


		}
	}
})();

