myApp.controller('userController', function($scope, userFactory, $location, $routeParams){

	$scope.currentUser;


	$scope.allUsers

	$scope.showUser = ''

	if($routeParams.id != undefined){


		

		userFactory.showUser($routeParams, function(data){


			$scope.showUser = data
		})
	}



	userFactory.getAllUsers(function(data){
		$scope.allUsers = data
	



	})


	
	userFactory.getUser(function(data){
		
		if(data.name == undefined){
			$location.url('/')

		}else{
			$scope.currentUser = data
		}
		
	})


	
	$scope.addUser = function(){
		userFactory.addUser($scope.newUser)
		$scope.newUser = {}
	}


	$scope.login = function(){
		userFactory.login($scope.loginUser)
	}
	$scope.logout = function(){
		userFactory.logout()
	}


	




	
})