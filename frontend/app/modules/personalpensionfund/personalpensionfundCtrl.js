(function() {
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

		Personalpensionfund.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/
		var funds = [];
		funds.append({name: "bla"})

		function Personalpensionfund() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
