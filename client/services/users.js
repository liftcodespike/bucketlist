myApp.factory('userFactory', function($http, $location){
	var factory = {};
	factory.current_user = {};

	factory.addUser = function(user){
		$http.post('/user/create', user).success(function(output){
			alert(output.message)
		})
	}




	factory.getAllUsers = function(callback){


		$http.get('/allusers').success(function(output){

			callback(output)
		})
	}

	factory.getUser =function(callback){

		$http.get('/session').success(function(output){
			
			factory.current_user.name =output.name

			factory.current_user.status =output.status

			factory.current_user._id =output._id

			callback(factory.current_user)
		})
	}

	factory.login = function(user){

		$http.post('/user/login', user).success(function(output){

			if(output.status == false){

				alert(output.message)
				}else{

					factory.getUser(function(data){

					})
					if(output.status==true){
						$location.url('/home')
					}
				}
				})
			}

	factory.logout = function(){
		$http.get('/logout')

		 $location.url('/')
	}



	factory.showUser = function(id, callback){

		$http.post('/showuser', id).success(function(output){

			
			callback(output)
		})
	}

	return factory

})