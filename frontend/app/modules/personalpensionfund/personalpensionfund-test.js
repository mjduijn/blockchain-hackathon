(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:personalpensionfundTest
	 * @description
	 * # personalpensionfundTest
	 * Test of the app
	 */

	describe('personalpensionfund test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('pensionfunds-frontend');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('PersonalpensionfundCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
