//____________Dependencies________________
	var express = require("express");
	var bodyParser = require("body-parser");
//________________________________________


//___________Express Application_____________
	var app = express();
	//process.env.PORT for Heroku to make a port
	var PORT  = process.env.PORT || 3000;

	// Requiring our models for syncing
	var db = require("./models");	

	//app should handle data parsing	
	app.use(bodyParser.urlencoded({extended:false}));
	app.use(bodyParser.json());
	app.use(bodyParser.text());
	app.use(bodyParser.json({type:"application/vnd.api+json"}));

	 // Static directory
	app.use(express.static("./public"));
//___________________________________________



//________________ROUTES _______________

	// //require our routes from different directories
	// require("./routes/html-routes.js")(app);

	// require("./routes/api-routes.js")(app);

	//require our routes from different directories
	var htmlRoutes = require("./routes/html-routes.js");
	app.use("/",htmlRoutes,function(req,res){
		console.log(req + " " + res);
	});

	var apiRoutes = require("./routes/api-routes.js");
	app.use("/",apiRoutes,function(req,res){
		console.log(req + " " + res);
	});
//___________________________________________



//_____________Start the Server______________
	db.sequelize.sync().then(function(){
		app.listen(PORT,function(){
			console.log("Get Your Life is ready to analyze your work life! (Port: " + PORT+" )");
		});
	});
//___________________________________________

