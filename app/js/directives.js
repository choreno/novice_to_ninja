(function () {
	'use strict';
	angular.module('exampleApp')
		.directive('unorderedList', [unorderedList]);

	function unorderedList() {

		return function (scope, element, attrs) {

			// console.log(scope);
			// console.log(element);
			// console.log(attrs);

			var data = scope[attrs['unorderedList']];

			
			if (angular.isArray(data)) {

				var listElem = angular.element('<ul>');

				element.append(listElem);


				for (var i = 0; i < data.length; i++) {
					// console.log(i);

					console.log('DataItem: ' + data[i].name);
					listElem.append(angular.element('<li>').text(data[i].name));
					

				}
			}
		}
	}
})();
