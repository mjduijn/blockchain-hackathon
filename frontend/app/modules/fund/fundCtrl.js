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

	FundList.$inject = ['$state'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */


	function FundList($state) {
		function goTocreate(){
			$state.go('home.fundcreation');
		}
		/*jshint validthis: true */
		var vm = this;
		vm.create = goTocreate;
		vm.funds = [];
		vm.funds.push({"description": "We invest in green grass", "assetClass":"scam", "riskProfile":">9000","address":"0xb4e4745d4c6e678c4e1c635d92818719740213c2"})

	}

})();
