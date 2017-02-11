'use strict';

/**
 * @ngdoc function
 * @name app.route:personalpensionfundRoute
 * @description
 * # personalpensionfundRoute
 * Route of the app
 */

angular.module('personalpensionfund')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('home.personalpensionfund', {
				url: '/personalpensionfund',
				templateUrl: 'app/modules/personalpensionfund/personalpensionfund.html',
				controller: 'PersonalpensionfundCtrl',
				controllerAs: 'vm'
			})
			.state('home.personalpensionfund.fund', {
				url: '^l/fund/:id',
				templateUrl: 'app/modules/fund/fundlist.html',
				controller: 'fundCtrl',
				controllerAs: 'vm'
			});


	}]);
