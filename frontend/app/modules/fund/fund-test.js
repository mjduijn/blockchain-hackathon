(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:fundTest
	 * @description
	 * # fundTest
	 * Test of the app
	 */

	describe('fundlist test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('pensionfunds-frontend');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('FundListCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
