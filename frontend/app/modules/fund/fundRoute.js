'use strict';

/**
 * @ngdoc function
 * @name app.route:fundRoute
 * @description
 * # fundRoute
 * Route of the app
 */

angular.module('fundlist')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('home.fundlist', {
				url: '/fund/',
				templateUrl: 'app/modules/fund/fundlist.html',
				controller: 'FundListCtrl',
				controllerAs: 'vm'
			});


	}]);
