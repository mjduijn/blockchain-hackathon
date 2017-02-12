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
		.module('fundlist')
		.controller('FundListCtrl', FundList);

	FundList.$inject = ['$state','FundService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */


	function FundList($state, FundService) {
		function goTocreate(){
			$state.go('home.fundcreation');
		}
		/*jshint validthis: true */
		var vm = this;
		vm.create = goTocreate;
		vm.funds = FundService.getFunds();

	}

})();
