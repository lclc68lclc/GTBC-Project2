//____________This is for the math_________________
var db = require("./models");

function compareUserResponses(UserArray, userResults) {
    console.log("The UserArray is: " + UserArray);
    var dataQueryObject;
    db.glassdoor_comments.findAll({
        where: {
            MaritalStatus: UserArray[2],
            Education: UserArray[3],
            StandardHours: 80,
            BusinessTravel: UserArray[5]
        }
    }).then(function(results) {
        dataQueryObject = results;

        // var dataQueryObject = 'SELECT AVG(DistanceFromHome), AVG(AbsentHours),' + 
        // 'AVG(WorkLifeBalance), AVG(StockOptions), AVG(PercentSalaryHike), ' +
        // 'AVG(TrainingTimesLastYear), AVG(YearsSinceLastPromotion), AVG(PerformanceRating), ' +
        // 'AVG(HourlyRate), AVG(JobInvolvement), AVG(EnvironmentSatisfaction), ' +
        // 'AVG(RelationshipSatisfaction), AVG(YearsAtCompany), AVG(YearsWithCurrManager),' + 
        // 'AVG(NumCompaniesWorked)  FROM (SELECT * from glassdoor_comments ' +
        // 'WHERE MaritalStatus = ? AND Education = ? AND StandardHours = 80 AND BusinessTravel= ?)'+ 
        // 'AS t'; //this will be the result from the query

        var pointsEarned = 0;
        //this is an array of indices of the answers we need to compare to the query above
        var answersNeeded = [6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        var index = 0;

        for (var key in dataQueryObject) {
<<<<<<< HEAD
            if (key === "Age" || key === "Gender" ||key === "MaritalStatus" || key === "OverTime"
                ||key === "Education" || key === "StandardHours" ||key === "BusinessTravel" ){
                
                var doNothing;
            }
=======
            if (key === "Age" || key === "Gender" || key === "MaritalStatus" || key === "OverTime" ||
                key === "Education" || key === "StandardHours" || key === "BusinessTravel") {
>>>>>>> 1e733c44c194930ce702b99654d0f56b331d586a

                var doNothing;
            } else {
                var questionNumber = answersNeeded[index];
                if (UserArray[questionNumber] >= dataQueryObject[key]) {
                    pointsEarned++;
                }
                index++;
            }
        }

        var percentToQuit = Math.ceil((pointsEarned / (answersNeeded.length)) * 100);

        if (percentToQuit <= 50) {
            //give the user the "You Need To Quit Modal/Page"
            var objWithLinks = {
                UserShould: "Quit",
                Title:"We believe you are not satisfied with your job and you should QUIT!",
                Description: "Below are some useful resources:",
                TopLink: "http://thecorporatetea.com/wp-content/uploads/2016/07/quit-job-check-mark-white-paper-39727680.jpg",
                Link1: "https://www.monster.com/career-advice/article/resignation-letter-sample",
                Link2: "https://pe.gatech.edu/courses/georgia-tech-coding-boot-camp",
                Link3: "https://www.buzzfeed.com/kristinchirico/12-of-the-absolute-best-ways-you-can-quit-your-job?utm_term=.eoZ1elmMR#.rlBVy0NBE"

            };
        } else if (percentToQuit > 50 && percentToQuit <= 80) {
            //give the user the "You're Doing Ok. Learn/Improve your Skills"
            var objWithLinks = {
                UserShould:"Improve",
                Title: "We believe you are doing OK in your position and you should keep your job!",
                Description: "Below are links to help enhance your current work experience",
                TopLink: "https://www.pickthebrain.com/blog/wp-content/uploads/2015/09/Screen-Shot-2015-09-29-at-11.27.02-PM.png",
                Link1: "https://www.forbes.com/sites/davidkwilliams/2016/07/06/12-ways-to-improve-work-life-balance-beginning-today/#2480be2364ef",
                Link2: "https://www.ted.com/talks/casey_brown_know_your_worth_and_then_ask_for_it",
                Link3: "https://www.lynda.com/"

            };
        } else if (percentToQuit > 80) {
            // give the user the "You're Doing Great! Take a vacation!"
            var objWithLinks = {
                UserShould: "Vaca",
                Title:"You are currently doing GREAT! Let's take a vacation! ",
                Description: "Below are some useful trip planning resources",
                TopLink: "https://www.quickbase.com/blog/wp-content/uploads/sites/2/2015/06/How-to-Get-Employees-to-Take-Vacation-%E2%80%93-and-Why-You-Should.jpg", //a file to request time off
                Link1: "https://www.kayak.com/explore/",
                Link2: "https://www.airbnb.com/",
                Link3: "https://www.tripadvisor.com/Attractions"

            };
        };
        userResults(objWithLinks);
    });
};

module.exports = compareUserResponses;
//_____________________________________________________