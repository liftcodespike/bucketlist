var users = require('./../controllers/users.js');
var items = require('./../controllers/items.js');


module.exports = function(app){



	//*******User routes **************

	app.post('/user/create', function(req, res){
		users.create(req, res)
	})

	app.post('/user/login', function(req, res){
		users.login(req, res)
	})

	app.get('/session', function(req, res){
		users.check(req, res)
	})


	app.get('/logout', function(req, res){

		users.logout(req, res)
	})


	app.get('/allusers', function(req, res){


		users.getAll(req, res)
	})



	app.post('/showuser', function(req, res){



		users.show(req, res)
	})

	//*******Item routes **************




	app.post('/additem', function(req, res){

		items.create(req, res)



	})

	app.get('/getuseritems', function(req, res){

		items.getUserItems(req,res)
	})


	app.post('/changestatus',function(req, res){


		items.change(req, res)
	})


	
}