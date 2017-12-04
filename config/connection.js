//______________  Require mySQL node package   _______________

	var mysql = require("mysql");
//____________________________________________________________




//__________________  Connect Node to mySQL  _________________

	var connection = mysql.createConnection({
		host:"localhost",
		user:"root",
		password: "185454",
		database: "comparison_data_db"
	});	
//____________________________________________________________



//___________________  Connect to your host  _________________
//
// Find and insert different types of connection errors 

	connection.connect(function(err){
		if (err){
			console.log("There was an error connecting: " + err.stack);
			return;
		}
		console.log("ChangeYourJob connection is up as id "+ connection.threadId);
	});
//___________________________________________________________



//___________________  Export the Connection  _________________
	
	module.exports = connection;

//___________________________________________________________
