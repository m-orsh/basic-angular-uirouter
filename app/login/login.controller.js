myApp.controller('LoginCtrl', [
	'$scope', 
	'$state', 
	'$mdDialog', 
	'LoginService',
	function($scope, $state, $mdDialog, LoginService) {
	$scope.login = login;
	$scope.enterPress = enterPress;
	$scope.$parent.currentNavItem = null;
	if(LoginService.checkLoginStatus()){
    	$scope.$parent.currentNavItem = 'home';
		$state.go('home' , {}, { reload: true });
	}
	function login(username,password){
		if(LoginService.login(username,password)){
			$state.go('home');
		}else{
			$mdDialog.show(
		      $mdDialog.alert()
		        .clickOutsideToClose(true)
		        .title('The username or password is incorrect.')
		        .textContent('Please try again.')
		        .ok('Got it!')
		    );
		}
	};
	function enterPress(event, username, password){
		 if (event.which === 13)
		 	login(username,password);
	};
}]);