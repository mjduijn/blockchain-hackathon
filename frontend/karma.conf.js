'use strict';

// Karma configuration
module.exports = function (config) {
	config.set({
		// Frameworks to use
		frameworks: ['jasmine'],

		// List of files / patterns to load in the browser
		files: [
			'src/bower_components/jquery/dist/jquery.js',
			'src/bower_components/es5-shim/es5-shim.js',
			'src/bower_components/json3/lib/json3.min.js',
			'src/bower_components/angular/angular.js',
			'src/bower_components/angular-aria/angular-aria.js',
			'src/bower_components/angular-resource/angular-resource.js',
			'src/bower_components/angular-mocks/angular-mocks.js',
			'src/bower_components/angular-cookies/angular-cookies.js',
			'src/bower_components/angular-sanitize/angular-sanitize.js',
			'src/bower_components/angular-animate/angular-animate.js',
			'src/bower_components/angular-touch/angular-touch.js',
			'src/bower_components/angular-ui-router/release/angular-ui-router.js',
			'src/bower_components/angular-aria/angular-aria.js',
			'src/bower_components/angular-material/angular-material.js',
			'src/bower_components/angular-messages/angular-messages.js',
			'src/bower_components/angular-material-icons/angular-material-icons.js',
			'app/app.js',
			'app/modules/home/homeModule.js',
			'app/modules/home/homeCtrl.js',
			'app/modules/home/homeRoute.js',
			'app/modules/home/homeService.js',
			'app/modules/home/home-test.js',
			'app/modules/personalpensionfund/personalpensionfundModule.js',
			'app/modules/personalpensionfund/personalpensionfundCtrl.js',
			'app/modules/personalpensionfund/personalpensionfundRoute.js',
			'app/modules/personalpensionfund/personalpensionfundService.js',
			'app/modules/personalpensionfund/personalpensionfund-test.js',
			'app/modules/fundlist/fundlistModule.js',
			'app/modules/fundlist/fundlistCtrl.js',
			'app/modules/fundlist/fundlistRoute.js',
			'app/modules/fundlist/fundlistService.js',
			'app/modules/fundlist/fundlist-test.js',
			'app/modules/fundcreation/fundcreationModule.js',
			'app/modules/fundcreation/fundcreationCtrl.js',
			'app/modules/fundcreation/fundcreationRoute.js',
			'app/modules/fundcreation/fundcreationService.js',
			'app/modules/fundcreation/fundcreation-test.js',
			'app/modules/investmentopertunity/investmentopertunityModule.js',
			'app/modules/investmentopertunity/investmentopertunityCtrl.js',
			'app/modules/investmentopertunity/investmentopertunityRoute.js',
			'app/modules/investmentopertunity/investmentopertunityService.js',
			'app/modules/investmentopertunity/investmentopertunity-test.js',
			'app/modules/test/testModule.js',
			'app/modules/test/testCtrl.js',
			'app/modules/test/testRoute.js',
			'app/modules/test/testService.js',
			'app/modules/test/test-test.js',
			'app/modules/bla/blaModule.js',
			'app/modules/bla/blaCtrl.js',
			'app/modules/bla/blaRoute.js',
			'app/modules/bla/blaService.js',
			'app/modules/bla/bla-test.js',
		],

		// Test results reporter to use
		// Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		//reporters: ['progress'],
		reporters: ['spec'],

		plugins : [
			'karma-jasmine',
			'karma-coverage',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-phantomjs-launcher',
			'karma-spec-reporter'
		],

		// Web server port
		port: 9876,

		// Enable / disable colors in the output (reporters and logs)
		colors: true,

		// Level of logging
		// Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// Enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// If true, it capture browsers, run tests and exit
		singleRun: true
	});
};
