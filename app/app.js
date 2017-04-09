var myApp = angular.module('myApp', 
	['ui.router', 
	 'ngMaterial',
	 'ngStorage',
   'ngMessages'])

myApp.config(function($stateProvider, $urlRouterProvider) {
  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  }

  var contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  }  

  var homeState = {
    name: 'home',
    url: '/',
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'about/about.html',
    controller: 'AboutCtrl'
  }


  $stateProvider.state(loginState);
  $stateProvider.state(contactState);
  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);

  $urlRouterProvider.otherwise('/');
});

