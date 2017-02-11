(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:personalpensionfundService
	 * @description
	 * # personalpensionfundService
	 * Service of the app
	 */

  	angular
		.module('personalpensionfund')
		.factory('PersonalpensionfundService', Personalpensionfund);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Personalpensionfund.$inject = ['$http'];

		function Personalpensionfund ($http) {

		}

})();
