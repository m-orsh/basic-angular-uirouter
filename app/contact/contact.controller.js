myApp.controller('ContactCtrl', ['$scope', '$state', '$mdDialog', function($scope, $state, $mdDialog) {
	$scope.$parent.checkLogin();
	$scope.$parent.currentNavItem = 'contact';
	$scope.submit = submit;
	function submit(){
		$scope.formData = {};
		$scope.form.$setPristine();
		$scope.form.$setUntouched();
		$mdDialog.show(
	      $mdDialog.alert()
	        .clickOutsideToClose(true)
	        .title('Thanks for your message.')
	        .textContent('We\'ll get back to you as soon as possible.')
	        .ok('Got it!')
	    );
	}
}]);