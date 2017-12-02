//____________This is for the math_________________

	var arrayFromSurvey = [1,2,3,2,4,5,1,4,3,1,4,1,2,4,1,2]; // length 16

	var arrayOfAveragesFromQuery = [2,3,2,4,5,1,4,3,1,4,1,2,4,1,2,1];

	var pointsEarned = 0;

	for (var i = 0; i <arrayFromSurvey.length; i++ ){
		if (arrayFromSurvey[i] >= arrayOfAveragesFromQuery[i]){
			pointsEarned++;
		}
	}

	var percentToQuit = Math.ceil((pointsEarned/(arrayOfAveragesFromQuery.length))*100);

	if (percentToQuit<= 50){
		//give the user the "You Need To Quit Modal/Page"
	}
	else if (percentToQuit > 50 && percentToQuit <=80){
		//give the user the "You're Doing Ok. Learn/Improve your Skills"
	}
	else if (percentToQuit> 80){
		// give the user the "You're Doing Great! Take a vacation!"
	}
//_____________________________________________________