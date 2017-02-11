'use strict';

/**
 * @ngdoc function
 * @name app.route:fundRoute
 * @description
 * # fundRoute
 * Route of the app
 */

angular.module('fund')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.fund', {
				url:'/fund',
				templateUrl: 'app/modules/fund/fund.html',
				controller: 'FundCtrl',
				controllerAs: 'vm'
			});

		
	}]);
