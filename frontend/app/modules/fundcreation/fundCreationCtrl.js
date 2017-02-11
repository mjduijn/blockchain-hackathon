(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:fundCtrl
	 * @description
	 * # fundCtrl
	 * Controller of the app
	 */

	angular
		.module('fundCreation')
		.controller('FundCreationCtrl', FundCreation);

	FundCreation.$inject = ['EthereumService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function FundCreation(EthereumService) {
		function createFund(fund) {
			EthereumService.createFund(fund);

		}

		/*jshint validthis: true */
		var vm = this;
		vm.create = createFund;
	}

})();
