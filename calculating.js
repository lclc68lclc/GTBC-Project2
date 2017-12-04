//____________This is for the math_________________
var db = require("./models");

function compareUserResponses(UserArray, userResults) {
    console.log("The UserArray is: " + UserArray);
    var dataQueryObject;
    db.glassdoor_comments.findAll({
        where: {
            MaritalStatus: UserArray[2],
            Education: UserArray[3],
            StandardHours: 80, //UserArray[4]
            BusinessTravel: UserArray[5]
        },
        attributes:{
            include:[
                [db.sequelize.fn('AVG',db.sequelize.col('DistanceFromHome')),'avgQ6'],
                [db.sequelize.fn('AVG',db.sequelize.col('EnvironmentSatisfaction')),'avgQ16'],
                [db.sequelize.fn('AVG',db.sequelize.col('HourlyRate')),'avgQ15'],
                [db.sequelize.fn('AVG',db.sequelize.col('NumCompaniesWorked')),"avgQ20"],
                [db.sequelize.fn('AVG',db.sequelize.col('PercentSalaryHike')),'avgQ11'],
                [db.sequelize.fn('AVG',db.sequelize.col('PerformanceRating')),'avgQ14'],
                [db.sequelize.fn('AVG',db.sequelize.col('RelationshipSatisfaction')),'avgQ17'],
                [db.sequelize.fn('AVG',db.sequelize.col('StockOptionLevel')),'avgQ10'],
                [db.sequelize.fn('AVG',db.sequelize.col('TrainingTimesLastYear')),'avgQ12'],
                [db.sequelize.fn('AVG',db.sequelize.col('WorkLifeBalance')),'avgQ9'],
                [db.sequelize.fn('AVG',db.sequelize.col('YearsAtCompany')),'avgQ18'],
                [db.sequelize.fn('AVG',db.sequelize.col('YearsSinceLastPromotion')),'avgQ13'],
                [db.sequelize.fn('AVG',db.sequelize.col('YearsWithCurrManager')),'avgQ19'],
                [db.sequelize.fn('AVG',db.sequelize.col('AbsentHours')),'avgQ8']
                
            ]
        }
    }).then(function(results) {
        dataQueryObject = results;
        // console.log("________________________");
        // // console.log("DataQueryObject[0] is: " + dataQueryObject[0]);
        // console.log("DataQueryObject[0] is: " + JSON.stringify(dataQueryObject[0],null,2));   
        // console.log("DataQueryObject[0]['thisAvg1'] is: " + JSON.stringify(dataQueryObject[0].get("thisAvg1")));   

        // console.log("________________________");

        var pointsEarned = 0;

        var quesNum = [6,16,15,20,11,14,17,10,12,9,18,13,19,8]; //Question # needed

        for (var i = 0; i < quesNum.length; i++) {
                var userValue = UserArray[quesNum[i]];

                var currAvgValue = dataQueryObject[0].get("avgQ"+quesNum[i]);
                if (quesNum[i] == 6||quesNum[i] == 8||quesNum[i] == 13||quesNum[i] == 18||quesNum[i] == 20){
                    if (currAvgValue!= null && userValue <= currAvgValue) {
                    console.log(currAvgValue);
                    pointsEarned++;
                    }
                }   
                else{
                    if (currAvgValue!= null && userValue >= currAvgValue) {
                        console.log(currAvgValue);
                        pointsEarned++;
                    }
                }

        }

        var percentToQuit = Math.ceil((pointsEarned / (quesNum.length)) * 100);

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