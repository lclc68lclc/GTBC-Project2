//________  Require Express & Router Node Packages  ___________
	

//_________________  Require Path Node module _________________
//path is needed to get files within our directory
	
	var path = require("path");
//_____________________________________________________________



//__________  Give the user a certain html page _______________
	
module.exports = function(app) {

	// Each of the below routes just handles the HTML page that the user gets sent to.

	// index route loads view.html
	app.get("/:whichPage?", function(req, res) {

		//check the reroute parmeter. 
		switch (req.params.whichPage) {

			// Always default to the home page. Other routes should be results & survey
			case "results":
				return res.sendFile(path.join(__dirname,"../public/result.html"));

			case "quiz":
				return res.sendFile(path.join(__dirname,"../public/quiz.html"));

			// Default to the home page
			default:
				return res.sendFile(path.join(__dirname,"../public/main.html"));
		};
	});
};
//_____________________________________________________________



