myApp.controller('AppCtrl', ['$scope',
	'$state', 'LoginService',
	function($scope, $state, LoginService) {
	
    $scope.logout = logout;
    $scope.checkLogin = checkLogin;
    LoginService.init($scope);
	function logout(){
		LoginService.logout();
		$state.go('login');
	}
	function checkLogin(){
		if(!LoginService.checkLoginStatus()){
			$state.go('login');
		}
	}
} ]);