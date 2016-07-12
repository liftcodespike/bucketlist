myApp.controller('itemController', function($scope,itemFactory, userFactory, $location, $route){
	$scope.userItems = ''


	$scope.currentUser;


	userFactory.getUser(function(data){


		$scope.currentUser = data
		

		if(data.name != undefined){

			itemFactory.getUserItems(function(data){

				$scope.userItems = data
		
			})

		}
	})
	





	$scope.addItem = function(){



		if($scope.newItem == undefined){


			alert('please fill out everything')


		}else if($scope.newItem.title.length < 5){

			alert('please fill out everything. title must be five characters.')

		}else if($scope.newItem.description== undefined|| $scope.newItem.description.length < 10){

			alert('please fill out everything. description must be ten characters.')

		}else{



		
				itemFactory.addItem($scope.newItem, function(data){
		
					$scope.userItems.push(data)
					$route.reload()
				})
				$scope.newItem = {}
			}
		}


	$scope.changeStatus = function(id){
		itemFactory.changeStatus(id, function(data){

			$route.reload()

		})
	}






})