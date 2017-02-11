(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:investmentopertunityService
	 * @description
	 * # investmentopertunityService
	 * Service of the app
	 */

	angular
		.module('investmentopertunity')
		.factory('InvestmentopertunityService', Investmentopertunity);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Investmentopertunity.$inject = ['$http'];

	function Investmentopertunity($http) {

	}

})();
