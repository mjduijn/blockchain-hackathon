'use strict';

/**
 * @ngdoc function
 * @name app.route:fundRoute
 * @description
 * # fundRoute
 * Route of the app
 */

angular.module('fundCreation')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('home.fundcreation', {
				url: '/fund/create',
				templateUrl: 'app/modules/fundcreation/fundCreation.html',
				controller: 'FundCreationCtrl',
				controllerAs: 'vm'
			});


	}]);
