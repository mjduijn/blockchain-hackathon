angular.module('pensionfunds-frontend').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/fund/fundlist.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "	<h1 class=\"md-title\">Fund List</h1>\n" +
    "	<md-card>\n" +
    "		<md-card-content>\n" +
    "			<md-card ng-repeat=\"\">\n" +
    "				<h2 class=\"md-title\">{{fund.name}}</h2>\n" +
    "				<md-card-content>\n" +
    "					<label>Description</label>\n" +
    "					<p>{{fund.description}}</p>\n" +
    "					<label>Asset Class</label>\n" +
    "					<p>{{fund.assetClass}}</p>\n" +
    "					<label>Risk profile</label>\n" +
    "					<p>{{fund.risk}}</p>\n" +
    "					<label>Valuation</label>\n" +
    "					<p>{{fund.valuation}}</p>\n" +
    "				</md-card-content>\n" +
    "\n" +
    "			</md-card>\n" +
    "		</md-card-content>\n" +
    "\n" +
    "		<md-card-actions layout=\"row\" layout-align=\"end-center\">\n" +
    "			<md-button ng-click=\"vm.create()\">Create fund</md-button>\n" +
    "		</md-card-actions>\n" +
    "	</md-card>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/fundcreation/fundCreation.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "	<h1 class=\"md-title\">Create fund</h1>\n" +
    "\n" +
    "	<md-card>\n" +
    "\n" +
    "		<md-card-content>\n" +
    "			<h2 class=\"md-title\">\n" +
    "				<md-input-container>\n" +
    "					<label>Name</label>\n" +
    "					<input ng-model=\"fund.name\" required type=\"text\">\n" +
    "				</md-input-container>\n" +
    "			</h2>\n" +
    "\n" +
    "			<md-input-container>\n" +
    "				<label>Description</label>\n" +
    "				<input ng-model=\"fund.description\" required  type=\"text\">\n" +
    "			</md-input-container>\n" +
    "\n" +
    "			<md-input-container>\n" +
    "				<label>URL</label>\n" +
    "				<input ng-model=\"fund.url\" required type=\"text\">\n" +
    "			</md-input-container>\n" +
    "\n" +
    "			<md-input-container>\n" +
    "				<label>Asset class</label>\n" +
    "				<input ng-model=\"fund.assetClass\" required type=\"text\">\n" +
    "			</md-input-container>\n" +
    "\n" +
    "		</md-card-content>\n" +
    "	</md-card>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/home/dashboard.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card class=\"text-center\">\n" +
    "        <md-card-content>\n" +
    "            <h1>{{ vm.title }}</h1>\n" +
    "            <h3>{{ vm.version }}</h3>\n" +
    "\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/home/home.html',
    "<md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\">\n" +
    "    <div ng-controller=\"SidenavCtrl as vm\" ng-cloak>\n" +
    "        <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;\">\n" +
    "                        <div>Personal Pension</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-list>\n" +
    "            <md-list-item ui-sref=\"home.dashboard\">\n" +
    "                <div class=\"inset\">\n" +
    "                    <ng-md-icon icon=\"apps\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> Dashboard </p>\n" +
    "            </md-list-item>\n" +
    "            <md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo('home.' + item.link)\">\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p > {{ item.name }}</p>\n" +
    "            </md-list-item>\n" +
    "            <md-divider></md-divider>\n" +
    "            <md-subheader>Admin</md-subheader>\n" +
    "            <md-list-item ng-repeat=\"item in vm.admin\" ng-click=\"vm.showSettingsBottom($event)\" >\n" +
    "                <div class=\"inset\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{ item.title }}</p>\n" +
    "            </md-list-item>\n" +
    "        </md-list>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "\n" +
    "<div layout=\"column\" class=\"relative\" layout-fill role=\"main\" ng-controller=\"LayoutCtrl as layout\" ng-cloak>\n" +
    "    <md-toolbar ng-show=\"!showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3>Personal pension</h3>\n" +
    "            <span flex></span>\n" +
    "            <md-button aria-label=\"Search\" ng-click=\"showSearch = !showSearch\">\n" +
    "                <ng-md-icon icon=\"search\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <md-menu>\n" +
    "                <md-button aria-label=\"Open Settings\" ng-click=\"layout.openMenu($mdOpenMenu, $event)\">\n" +
    "                    <md-icon> more_vert </md-icon>\n" +
    "                </md-button>\n" +
    "                <md-menu-content width=\"4\">\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changeProfile($event)\">\n" +
    "                            <md-icon>face</md-icon>\n" +
    "                            Profile\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changePassword()\">\n" +
    "                            <md-icon>lock</md-icon>\n" +
    "                            Password\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-divider></md-menu-divider>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.logOut()\">\n" +
    "                            <md-icon>power_settings_new</md-icon>\n" +
    "                            Logout\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "            </md-menu>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3 flex=\"10\">\n" +
    "                Back\n" +
    "            </h3>\n" +
    "            <md-input-container md-theme=\"input\" flex>\n" +
    "                <label>&nbsp;</label>\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content layout=\"column\" flex md-scroll-y style=\"background-color:#DCDCDC\">\n" +
    "        <div ui-view></div>\n" +
    "    </md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/investmentopertunity/investmentopertunity.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "	<md-card>\n" +
    "		<md-card-content>\n" +
    "			<h2 class=\"md-title\">Content from: investmentopertunity page</h2>\n" +
    "		</md-card-content>\n" +
    "	</md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/layouts/main-page/main-page.html',
    "<md-toolbar ng-show=\"!showSearch\">\n" +
    "	<div class=\"md-toolbar-tools\">\n" +
    "		<md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "			<ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "		</md-button>\n" +
    "		<h3>\n" +
    "			<a href=\"/\">Personal pension</a>\n" +
    "		</h3>\n" +
    "		<span flex></span>\n" +
    "		<md-button aria-label=\"Search\" ng-click=\"showSearch = !showSearch\">\n" +
    "			<ng-md-icon icon=\"search\"></ng-md-icon>\n" +
    "		</md-button>\n" +
    "		<md-menu>\n" +
    "			<md-button aria-label=\"Open Settings\" ng-click=\"layout.openMenu($mdOpenMenu, $event)\">\n" +
    "				<md-icon> more_vert</md-icon>\n" +
    "			</md-button>\n" +
    "			<md-menu-content width=\"4\">\n" +
    "				<md-menu-item>\n" +
    "					<md-button ng-click=\"layout.changeProfile($event)\">\n" +
    "						<md-icon>face</md-icon>\n" +
    "						Profile\n" +
    "					</md-button>\n" +
    "				</md-menu-item>\n" +
    "				<md-menu-item>\n" +
    "					<md-button ng-click=\"layout.changePassword()\">\n" +
    "						<md-icon>lock</md-icon>\n" +
    "						Password\n" +
    "					</md-button>\n" +
    "				</md-menu-item>\n" +
    "				<md-menu-divider></md-menu-divider>\n" +
    "				<md-menu-item>\n" +
    "					<md-button ng-click=\"layout.logOut()\">\n" +
    "						<md-icon>power_settings_new</md-icon>\n" +
    "						Logout\n" +
    "					</md-button>\n" +
    "				</md-menu-item>\n" +
    "			</md-menu-content>\n" +
    "		</md-menu>\n" +
    "	</div>\n" +
    "</md-toolbar>\n" +
    "<md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\n" +
    "	<div class=\"md-toolbar-tools\">\n" +
    "		<md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\n" +
    "			<ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "		</md-button>\n" +
    "		<h3 flex=\"10\">\n" +
    "			Back\n" +
    "		</h3>\n" +
    "		<md-input-container md-theme=\"input\" flex>\n" +
    "			<label>&nbsp;</label>\n" +
    "			<input ng-model=\"search.who\" placeholder=\"Search ...\">\n" +
    "		</md-input-container>\n" +
    "\n" +
    "	</div>\n" +
    "</md-toolbar>\n" +
    "<md-content class=\"md-blue-grey-theme\" flex md-scroll-y>\n" +
    "	<ui-view layout=\"column\" layout-fill layout-padding>\n" +
    "\n" +
    "\n" +
    "	</ui-view>\n" +
    "</md-content>\n"
  );


  $templateCache.put('app/modules/layouts/side-nav/sidenav.html',
    "<md-toolbar class=\"md-tall md-hue-2\">\n" +
    "	<div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "		<div layout=\"row\">\n" +
    "			<div flex=\"20\">\n" +
    "				<img style=\"width: 36px; height: 36px; border-radius: 50%\"\n" +
    "					 actual-src=\"data:image/jpeg;base64,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\"\n" +
    "					 showloader=\"\" loader-class=\"preload\" loader-src=\"app/assets/images/loader.gif\"\n" +
    "					 src=\"data:image/jpeg;base64,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\">\n" +
    "			</div>\n" +
    "			<div flex=\"80\" style=\"margin-top: 10px;font-size: 1em;\">\n" +
    "				<div>Fernando Monteiro</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</md-toolbar>\n" +
    "<md-list>\n" +
    "	<md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo(item.link)\">\n" +
    "		<div class=\"inset\" ng-show=\"item.icon\">\n" +
    "			<ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "		</div>\n" +
    "		<p> {{ item.name }}</p>\n" +
    "	</md-list-item>\n" +
    "	<md-divider></md-divider>\n" +
    "	<md-subheader>Admin</md-subheader>\n" +
    "	<md-list-item ng-repeat=\"item in vm.admin\" ng-click=\"vm.showSettingsBottom($event)\">\n" +
    "		<div class=\"inset\">\n" +
    "			<ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "		</div>\n" +
    "		<p> {{ item.title }}</p>\n" +
    "	</md-list-item>\n" +
    "</md-list>\n"
  );


  $templateCache.put('app/modules/personalpensionfund/personalpensionfund.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "	<md-card>\n" +
    "		<md-card-content>\n" +
    "			<h2 class=\"md-title\">My PersonalPensionFund</h2>\n" +
    "			<label>Expected Age</label>\n" +
    "			<p>{{expected-age}}</p>\n" +
    "			<label>Default fund</label>\n" +
    "			<md-card>\n" +
    "				<md-card-content>\n" +
    "					<h2 class=\"md-title\">{{defaultFund.name}}</h2>\n" +
    "					<label>Description</label>\n" +
    "					<p>{{defaultFund.Description}}</p>\n" +
    "					<label>Shares</label>\n" +
    "					<p></p>\n" +
    "					<label>URL</label>\n" +
    "					<p>{{defaultFund.url}}</p>\n" +
    "					<label>Hash</label>\n" +
    "					<p>{{defaultFund.contractID}}</p>\n" +
    "				</md-card-content>\n" +
    "			</md-card>\n" +
    "		</md-card-content>\n" +
    "		<md-card-actions layout=\"row\" layout-align=\"end-center\">\n" +
    "			<md-button>Details</md-button>\n" +
    "		</md-card-actions>\n" +
    "\n" +
    "	</md-card>\n" +
    "	<div layout=\"row\" flex>\n" +
    "		<div class=\"parent\" layout=\"row\" ng-repeat=\"fund in vm.funds\" flex>\n" +
    "			<md-card>\n" +
    "				<md-card-content>\n" +
    "					<h2 class=\"md-title\">{{fund.name}}</h2>\n" +
    "					<label>Description</label>\n" +
    "					<p>\n" +
    "						{{fund.description}}\n" +
    "					</p>\n" +
    "				</md-card-content>\n" +
    "				<md-card-actions layout=\"row\" layout-align=\"end-center\">\n" +
    "					<md-button ng-click=\"vm.fundDetails(fund.id)\">Details</md-button>\n" +
    "				</md-card-actions>\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n"
  );

}]);
