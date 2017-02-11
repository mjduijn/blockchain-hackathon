/*!
* pensionfunds-frontend - v0.0.1 - MIT LICENSE 2017-02-11. 
* @author Jasper van Gelder
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('pensionfunds-frontend', [
		'ngResource',
		'ngAria',
		 'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'home',
		'personalpensionfund',
		'fundlist',
		'fundCreation',
		'investmentopertunity',
	]);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('pensionfunds-frontend')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		
		$urlRouterProvider
			.otherwise('/dashboard');
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:fundModule
	 * @description
	 * # fundModule
	 * Module of the app
	 */

	angular.module('fundlist', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:fundModule
	 * @description
	 * # fundModule
	 * Module of the app
	 */

	angular.module('fundCreation', []);

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:investmentopertunityModule
	 * @description
	 * # investmentopertunityModule
	 * Module of the app
	 */

	angular.module('investmentopertunity', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:personalpensionfundModule
	 * @description
	 * # personalpensionfundModule
	 * Module of the app
	 */

	angular.module('personalpensionfund', []);

})();

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

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('pensionfunds-frontend')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html'
			});
			
	}]);

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

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:fundCtrl
	 * @description
	 * # fundCtrl
	 * Controller of the app
	 */

	angular
		.module('fundlist')
		.controller('FundListCtrl', FundList);

	FundList.$inject = ['$state'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */


	function FundList($state) {
		function goTocreate(){
			$state.go('home.fundcreation');
		}
		/*jshint validthis: true */
		var vm = this;
		vm.create = goTocreate;

	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:fundCtrl
	 * @description
	 * # fundCtrl
	 * Controller of the app
	 */

	angular
		.module('fundCreation')
		.controller('FundCreationCtrl', FundCreation);

	FundCreation.$inject = [];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function FundCreation() {
		/*jshint validthis: true */
		var vm = this;

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('pensionfunds-frontend')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Personal Pension Fund";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:investmentopertunityCtrl
	 * @description
	 * # investmentopertunityCtrl
	 * Controller of the app
	 */

	angular
		.module('investmentopertunity')
		.controller('InvestmentopertunityCtrl', Investmentopertunity);

	Investmentopertunity.$inject = [];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Investmentopertunity() {
		/*jshint validthis: true */
		var vm = this;

	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:LayoutCtrl
	 * @description
	 * # LayoutCtrl
	 * Controller of the app
	 */

	angular
		.module('pensionfunds-frontend')
		.controller('LayoutCtrl', Layout);

	Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
					.content('Password clicked!')
					.position('top right')
					.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'tabDialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true
			})
				.then(function (answer) {
					$mdToast.show(
						$mdToast.simple()
							.content('You said the information was "' + answer + '".')
							.position('top right')
							.hideDelay(2000)
					);

				}, function () {
					$mdToast.show(
						$mdToast.simple()
							.content('You cancelled the dialog.')
							.position('top right')
							.hideDelay(2000)
					);
				});

			function DialogController($scope, $mdDialog) {
				$scope.hide = function () {
					$mdDialog.hide();
				};

				$scope.cancel = function () {
					$mdDialog.cancel();
				};

				$scope.answer = function (answer) {
					$mdDialog.hide(answer);
				};
			}
		};


		vm.logOut = function () {

			alert('Implement your Function Here');
			// $cookies.put('dev_appserver_login', ' ');
			//$state.go('out', {}, {reload: true});

		};

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:SidenavCtrl
	 * @description
	 * # SidenavCtrl
	 * Controller of the app
	 */
	angular
		.module('pensionfunds-frontend')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', 'MenuService', '$scope'];
	SettingsCtrl.$inject = ['$mdBottomSheet'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function SidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, MenuService, $scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function () {
			$mdSidenav('left').close();
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);

		vm.menu = MenuService.listMenu();

		vm.admin = [
			{
				link: 'showListBottomSheet($event)',
				title: 'Settings',
				icon: 'settings'
			}
		];

		vm.navigateTo = function (target) {

			var page = target;

			$state.go(page);

		};

		vm.showSettingsBottom = function ($event) {
			vm.alert = '';
			$mdBottomSheet.show({
				template: '<md-bottom-sheet class="md-grid" layout="column" ng-cloak><div layout="row" layout-align="center center"><h4>With clickOutsideToClose option, drag down or press ESC to close</h4></div><md-list flex layout="row" layout-align="center center"><md-list-item ng-repeat="item in vm.items"><md-button class="md-grid-item-content" ng-click="vm.listItemClick($index)"><md-icon class="md-48">{{item.icon}}</md-icon><div class="md-grid-text"> {{ item.name }} </div></md-button></md-list-item></md-list></md-bottom-sheet>',
				controller: 'SettingsCtrl',
				controllerAs: 'vm',
				targetEvent: $event
			}).then(function (clickedItem) {
				$mdToast.show(
					$mdToast.simple()
						.content(clickedItem.name + ' clicked!')
						.position('top right')
						.hideDelay(2000)
				);
			});
		};

	}

	function SettingsCtrl($mdBottomSheet) {
		/*jshint validthis: true */
		var vm = this;

		vm.items = [
			{name: 'Roles', icon: 'assignment_ind'},
			{name: 'Notes', icon: 'speaker_notes'},
			{name: 'Tasks', icon: 'view_list'},
			{name: 'Inbox', icon: 'inbox'}
		];

		vm.listItemClick = function ($index) {
			var clickedItem = vm.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};
	}

})();

(function () {
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

	Personalpensionfund.$inject = ["$scope", "$state", "PersonalpensionfundService"];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */


	function Personalpensionfund($scope, $state, PersonalpensionfundService) {
		function fundDetails(id) {
			$state.go("home.personalpensionfund.fund", {"id": id});
		}

		/*jshint validthis: true */
		var vm = this;
		vm.fundDetails = fundDetails;
		vm.funds = [];
		var promise = PersonalpensionfundService.getPersonalPensionFundDetails();
		promise.then(function (funds) {
			vm.funds = funds;
		});
		// vm.funds = [{
		// 	"name": "bla",
		// 	"description": "dasdasdsaasd"
		// }];


	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:fundService
	 * @description
	 * # fundService
	 * Service of the app
	 */

	angular
		.module('fundlist')
		.factory('FundService', Fund);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Fund.$inject = ['$http'];

	function Fund($http) {
		$http.get('/', config).then(successCallback, errorCallback);
	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('pensionfunds-frontend')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:investmentopertunityService
	 * @description
	 * # investmentopertunityService
	 * Service of the app
	 */

	angular
		.module('investmentopertunity')
		.factory('InvestmentopertunityService', Investmentopertunity);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Investmentopertunity.$inject = ['$http'];

	function Investmentopertunity($http) {

	}

})();

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

		Menu.$inject = ['$http'];

		function Menu ($http) {

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

		Menu.$inject = ['$http'];

		function Menu ($http) {

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

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:personalpensionfundService
	 * @description
	 * # personalpensionfundService
	 * Service of the app
	 */

	angular
		.module('personalpensionfund')
		.factory('PersonalpensionfundService', Personalpensionfund);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Personalpensionfund.$inject = ['$http', '$q'];


	function Personalpensionfund($http, $q) {
		function getPersonalPensionFundDetails() {
			var deferred = $q.defer();

			deferred.resolve([{"name": "lol", "description": "asddasd", "url": "www.myfundweb.com/fund-a", "id": 1}]);
			return deferred.promise;


			// $http({
			// 	method: "",
			// 	headers: {},
			// 	url: ""
			// }).then(success, error)
		}

		return {
			getPersonalPensionFundDetails: getPersonalPensionFundDetails
		};
	}

})();
