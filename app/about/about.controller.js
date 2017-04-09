myApp.controller('AboutCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.$parent.checkLogin();
	$scope.$parent.currentNavItem = 'about';
}]);