// angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//
// 	$routeProvider
//
// 		// home page
// 		.when('/', {
// 			templateUrl: 'views/home.html',
// 			controller: 'MainController'
// 		})
//
// 		.when('/nerds', {
// 			templateUrl: 'views/nerd.html',
// 			controller: 'NerdController'
// 		})
//
// 		.when('/geeks', {
// 			templateUrl: 'views/geek.html',
// 			controller: 'GeekController'
// 		});
//
// 	$locationProvider.html5Mode(true);
//
// }]);

var routerApp = angular.module('appRoutes', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

	// HOME STATES AND NESTED VIEWS ========================================
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: "MainController"
		})

		// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
		.state('nerds', {
			url: "/nerds",
			templateUrl: "views/nerd.html",
			controller: "NerdController"
		})

		.state('mail', {
			url: "/mail",
			templateUrl: "views/mail.html",
			controller: "MailController"
		});

});