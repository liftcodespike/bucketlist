var mongoose = require('mongoose');

var User = mongoose.model('User')
var Item = mongoose.model('Item')


module.exports= (function(){

	return{

		change: function(req, res){


			Item.findOne({_id: req.body._id}, function(err, item){


				if(err){
					console.log(err)
				}else{
					if(item.status=='pending'){

						item.status ='completed'


					}else{


						item.status= 'pending'
					}

					item.save(function(err){

						if(err){
							console.log(err)
						}else{


							res.json({status: true})
						}
					})

				}
			})


		},




		create:function(req, res){

				User.findOne({_id:req.session.user._id}, function(err, userA){
					if(err){
						console.log(err)
					}else{

						var item = new Item({title: req.body.title, description: req.body.description, status: 'pending', created_by: req.session.user.name})
						item._users.push(userA)
						userA._items.push(item)
						if(req.body.user){
							User.findOne({_id: req.body.user}, function(err, userB){
								if(err){
									console.log(err)
								}else{
									item._users.push(userB)
									userB._items.push(item)
									item.save(function(err){
										if(err){
											console.log(err)
										}
									})
									userB.save(function(err){
										if(err){
											console.log(err)
										}
									})
								}
							})
						}
						item.save(function(err, result){
							userA.save(function(err){
								if(err){
									console.log(err)
								}
							})
							if(err){
								console.log(err)
							}else{
								Item.find({_id: result._id})
								.populate('_users')
								.exec(function(err, results){
									if(err){
										console.log(err)
									}else{
										res.json(results)
									}
								})
							}
						})
					}
				})
			
		},



		getUserItems:function(req, res){



			User.findOne({_id: req.session.user._id})
			.populate('_items')
			.exec(function(err, user){

				if(err){
					console.log(err)
				}else{

					res.json(user._items)
				}
			})
		},
		
	}

})()