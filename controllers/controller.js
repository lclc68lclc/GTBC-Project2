//________  Require Express & Router Node Packages  ___________
	var express  = require("express");
	var router = express.Router();
//_____________________________________________________________


//_______________  Require/Import Files Needed  _______________
	
	// This is for any model we have created
	// var burgers = require("../models/burgers.js");

//_____________________________________________________________


//_______________________   Router   _______________________

	router.get("/", function(request,response){
		burgers.all(function(data){
			var fullBurgersObj = {
				allBurgers : data
			};
			console.log(fullBurgersObj);
			response.render("index",fullBurgersObj);
		});
	});

	router.post("api/clients_responses", function(request,response){
		burgers.create(
			["burger_name"],
			[request.body.burger_name],
			function(result){
				response.json({id:result.insertId})
			});
	});
//_____________________________________________________________


//__________________Export your Router _______________________

	module.export = router;
//_____________________________________________________________
