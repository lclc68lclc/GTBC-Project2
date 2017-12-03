var db = require("../models");
var compareUserResponses = require('../calculating.js');

module.exports = function(app) {

    //Get the model from the db
    app.get("/api/glassdoor_data", function(req, res) {
        db.glassdoor_comments.findAll({ limit: 100 })
            .then(function(dbglassdoor_comments) {
                res.json(dbglassdoor_comments);
            });
    });

    // POST route for posting a quiz to the db
    app.post("/api/", function(req, res) {
        //if the resultsObj works, the obj below will have to index
        //in this format: req.body.scores[i]
        console.log("This is the request from posting: " + req.body);
        var resultsObj = compareUserResponses(req.body.scores, userResults);
        console.log(resultsObj);
        db.glassdoor_comments.create({
                Age: req.body[0],
                Gender: req.body[1],
                MaritalStatus: req.body[2],
                Education: req.body[3],
                StandardHours: req.body[4],
                BusinessTravel: req.body[5],
                DistanceFromHome: req.body[6],
                OverTime: req.body[7],
                AbsentHours: req.body[8],
                WorkLifeBalance: req.body[9],
                StockOptions: req.body[10],
                PercentSalaryHike: req.body[11],
                TrainingTimesLastYear: req.body[12],
                YearsSinceLastPromotion: req.body[13],
                PerformanceRating: req.body[14],
                HourlyRate: req.body[15],
                JobInvolvement: req.body[16],
                EnvironmentSatisfaction: req.body[17],
                RelationshipSatisfaction: req.body[18],
                YearsAtCompany: req.body[19],
                YearsWithCurrManager: req.body[20],
                NumCompaniesWorked: req.body[21]
            })
            .then(function(dbglassdoor_comments) {
                res.json(dbglassdoor_comments);
            });
    });
};