(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:fundService
	 * @description
	 * # fundService
	 * Service of the app
	 */

  	angular
		.module('fund')
		.factory('FundService', Fund);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Fund.$inject = ['$http'];

		function Fund ($http) {

		}

})();
