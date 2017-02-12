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
		var address = "0xb46ef5a50681a9df51e0c31cfae5a4bb3614094a";

		function fundDetails(id) {
			$state.go("home.fund", {"id": id});
		};
		function refreshFundCounter(){
			vm.fundCounter = EthereumService.getFunds({"address":address});
			getFunds();
		};
		function getFunds(){
			var i;
			for(i =0; i < vm.fundCounter; i++){
				vm.funds.push(EthereumService.getFund({"address":address},i));
			}
		}
		function addFund(){
			EthereumService.addFund(vm.addfund,address);
			refreshFundCounter();
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
		vm.addFund = addFund;

		// vm.funds = [{
		// 	"name": "bla",
		// 	"description": "dasdasdsaasd"
		// }];


	}

})();
