'use strict';

/**
 * @ngdoc function
 * @name app.route:investmentopertunityRoute
 * @description
 * # investmentopertunityRoute
 * Route of the app
 */

angular.module('investmentopertunity')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('home.investmentopertunity', {
				url: '/investmentopertunity',
				templateUrl: 'app/modules/investmentopertunity/investmentopertunity.html',
				controller: 'InvestmentopertunityCtrl',
				controllerAs: 'vm'
			});


	}]);
