myApp.controller('HomeCtrl', ['$scope', 
	'$state', 
	function($scope, $state) {
	$scope.$parent.checkLogin();
	$scope.$parent.currentNavItem = 'home';
}]);