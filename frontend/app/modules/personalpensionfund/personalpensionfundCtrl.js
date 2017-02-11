(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:personalpensionfundCtrl
	 * @description
	 * # personalpensionfundCtrl
	 * Controller of the app
	 */

	angular
		.module('personalpensionfund')
		.controller('PersonalpensionfundCtrl', Personalpensionfund);

	Personalpensionfund.$inject = ["$scope", "$state", "PersonalpensionfundService"];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */


	function Personalpensionfund($scope, $state, PersonalpensionfundService) {
		function fundDetails(id) {
			$state.go("home.personalpensionfund.fund", {"id": id});
		}

		/*jshint validthis: true */
		var vm = this;
		vm.fundDetails = fundDetails;
		vm.funds = [];
		var promise = PersonalpensionfundService.getPersonalPensionFundDetails();
		promise.then(function (funds) {
			vm.funds = funds;
		});
		// vm.funds = [{
		// 	"name": "bla",
		// 	"description": "dasdasdsaasd"
		// }];


	}

})();
