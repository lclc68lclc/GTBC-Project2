//____________This is for the math_________________

function compareUserResponses(UserArray, callback) {

    var dataQueryObject = 'SELECT AVG(DistanceFromHome), AVG(AbsentHours), AVG(WorkLifeBalance), AVG(StockOptions), AVG(PercentSalaryHike), AVG(TrainingTimesLastYear), AVG(YearsSinceLastPromotion), AVG(PerformanceRating), AVG(HourlyRate), AVG(JobInvolvement), AVG(EnvironmentSatisfaction), AVG(RelationshipSatisfaction), AVG(YearsAtCompany), AVG(YearsWithCurrManager), AVG(NumCompaniesWorked)  FROM (SELECT * from glassdoor_comments WHERE MaritalStatus = ? AND Education = ? AND StandardHours = 80 AND BusinessTravel= ?) AS t; //this will be the result from the query

    var pointsEarned = 0;

    for (var i = 0; i < UserArray.length; i++) {
        if (UserArray[i] >= DataQueryArray[i]) {
            pointsEarned++;
        }
    }

    var percentToQuit = Math.ceil((pointsEarned / (DataQueryArray.length)) * 100);

    if (percentToQuit <= 50) {
        //give the user the "You Need To Quit Modal/Page"
        var userResults = {
            UserShould: "We believe you are not satisfied with your job and you should QUIT!",
            Description: "Below are some useful resources:",
            TopLink: "", //a File for quiting (resignnation letter)
            Link1: "",
            Link2: "",
            Link3: "",

        };
    } else if (percentToQuit > 50 && percentToQuit <= 80) {
        //give the user the "You're Doing Ok. Learn/Improve your Skills"
        var userResults = {
            UserShould: "We believe you are doing OK in your position and you should keep your job!",
            Description: "Below are links to help enhance your current work experience",
            TopLink: "", //a file to negotiation
            Link1: "",
            Link2: "",
            Link3: "",

        };
    } else if (percentToQuit > 80) {
        // give the user the "You're Doing Great! Take a vacation!"
        var userResults = {
            UserShould: "You are currently doing GREAT! Let's take a vacation! ",
            Description: "Below are some useful trip planning resources",
            TopLink: "", //a file to request time off
            Link1: "",
            Link2: "",
            Link3: "",

        };
    };
};

module.exports = compareUserResponses;
//_____________________________________________________