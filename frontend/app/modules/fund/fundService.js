(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:fundService
	 * @description
	 * # fundService
	 * Service of the app
	 */

	angular
		.module('fundlist')
		.factory('FundService', Fund);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Fund.$inject = ['$http'];



	function Fund($http) {
		var funds = [];
		funds.push({"description": "We invest in green grass", "assetClass":"scam", "riskProfile":">9000","address":"0x6a7efe1389d31df8b421b241be8b2219b89995ab"})

		function addFund(fund) {
			funds.push(fund);
		}
		function getFunds() {
			return funds;
		}
		return {
			addFund: addFund,
			getFunds: getFunds
		}
	}

})();
