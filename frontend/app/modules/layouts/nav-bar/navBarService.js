(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('pensionfunds-frontend')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http', 'EthereumService'];

		function Menu ($http, EthereumService) {

			var menu = [

					{
						link: 'personalpensionfund',
							name: 'Personalpensionfund'
					},

					{
						link: 'fundlist',
							name: 'Funds'
					},

					{
						link: 'investmentopertunity',
							name: 'Investmentopertunity'
					},

					{
						link: 'test',
							name: 'Test'
					},

					{
						link: 'bla',
							name: 'Bla'
					},

		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
