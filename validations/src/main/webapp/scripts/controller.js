var helloApp = angular.module("helloApp", []);

helloApp.controller("helloController", function($scope, $log) {
	$scope.message = "Hello Angular";
	
	$scope.enter = function() {
		$log.debug("enter....");
	}
	
	$scope.login = function() {
		$log.debug("login....");
		console.log($scope.userName);
		console.log($scope.password);
	}
});