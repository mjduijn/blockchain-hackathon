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

	}

})();
