(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:fundCtrl
	* @description
	* # fundCtrl
	* Controller of the app
	*/

  	angular
		.module('fund')
		.controller('FundCtrl', Fund);

		Fund.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Fund() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
