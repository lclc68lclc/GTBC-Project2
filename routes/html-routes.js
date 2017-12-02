//________  Require Express & Router Node Packages  ___________
	
	var express  = require("express");
	var router = express.Router();
//_____________________________________________________________



//_________________  Require Path Node module _________________
//
// path is needed to get files within our directory
	
	var path = require("path");

//_____________________________________________________________



//__________  Give the user a certain html page _______________
	
	//get the url. set an optional parameter "reroute"
	router.get("/:reroute?",function(request,response){
		
		//check the reroute parmeter. 
		switch (request.params.reroute) {

			// Always default to the home page. Other routes should be results & survey
			case "result":
				return response.sendFile(path.join(__dirname,"../public/result.html"));

			case "quiz":
				return response.sendFile(path.join(__dirname,"../public/quiz.html"));

			// Default to the home page
			default:
				return response.sendFile(path.join(__dirname,"../public/main.html"));
		}
	});
//_____________________________________________________________



//__________________Export your Router _______________________

	module.export = router;
//_____________________________________________________________


