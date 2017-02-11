(function () {
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

	Personalpensionfund.$inject = ['$http', '$q'];


	function Personalpensionfund($http, $q) {
		function getPersonalPensionFundDetails() {
			var deferred = $q.defer();

			deferred.resolve([{"name": "lol", "description": "asddasd", "url": "www.myfundweb.com/fund-a", "id": 1}]);
			return deferred.promise;


			// $http({
			// 	method: "",
			// 	headers: {},
			// 	url: ""
			// }).then(success, error)
		}

		return {
			getPersonalPensionFundDetails: getPersonalPensionFundDetails
		};
	}

})();
