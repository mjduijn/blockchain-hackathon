(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:investmentopertunityTest
	 * @description
	 * # investmentopertunityTest
	 * Test of the app
	 */

	describe('investmentopertunity test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('pensionfunds-frontend');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('InvestmentopertunityCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
