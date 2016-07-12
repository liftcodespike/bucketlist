myApp.factory('itemFactory', function($http, $location){
	var factory = {}
	
	factory.getUserItems = function(callback){
		$http.get('/getuseritems').success(function(output){

			callback(output)
		})
	}

	factory.addItem = function(item, callback){
		$http.post('/additem', item).success(function(output){

			callback(output)
		})

	}


	factory.changeStatus=function(id, callback){
		id = {_id: id}


		$http.post('/changestatus', id).success(function(output){

			callback(output)
		})
	}

	return factory

})