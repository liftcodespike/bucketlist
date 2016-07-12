	var myApp = angular.module('myApp', ['ngRoute', 'ngMessages'])

		myApp.config(function($routeProvider){

			$routeProvider
			.when('/', {
				templateUrl: 'partials/logreg.html'
			})

			.when('/home', {
				templateUrl: 'partials/home.html'
			})
			.when('/user/:id', {
				templateUrl: 'partials/usershow.html'
			})
			.otherwise({
				redirectTo: '/'
			})
		})
