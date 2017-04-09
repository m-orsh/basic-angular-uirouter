myApp.service('LoginService', [
  '$localStorage', 
  function($localStorage) {
    this.init = function($scope){
      this._scope = $scope;
      this._scope.$storage = $localStorage.$default({});
    };

    this.login = function(username,password){
      //very secure password validation
      if(username=="testguy"&&password=="testguy"){
        this._scope.$storage.loggedIn = true;
        return true;
      }else{
        return false;
      }
    };

    this.checkLoginStatus = function(){
      return this._scope.$storage.loggedIn;
    };

    this.logout = function(){
      this._scope.$storage.loggedIn = false;
    };
    return true;
  }
]);