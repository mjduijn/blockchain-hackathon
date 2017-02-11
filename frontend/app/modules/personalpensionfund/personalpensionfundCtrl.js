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

	Personalpensionfund.$inject = ["$scope", "$state", "PersonalpensionfundService","EthereumService"];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */


	function Personalpensionfund($scope, $state, PersonalpensionfundService,EthereumService) {
		function fundDetails(id) {
			$state.go("home.fund", {"id": id});
		};
		function refreshFundCounter(){
			EthereumService.createPersonalPension("asddas",0);
			EthereumService.getFunds({"address":""}).then(
				function (data) {
					vm.fundCounter(data);
				}
			);
		};

		/*jshint validthis: true */
		var vm = this;
		vm.fundDetails = fundDetails;
		vm.funds = [];
		var promise = PersonalpensionfundService.getPersonalPensionFundDetails();
		promise.then(function (funds) {
			vm.funds = funds;
		});
		vm.refreshFundCounter = refreshFundCounter;


		// vm.funds = [{
		// 	"name": "bla",
		// 	"description": "dasdasdsaasd"
		// }];


	}

})();
