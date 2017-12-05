 var db = require("../models");
var compareUserResponses = require('../calculating.js');
var express = require("express");
var exphbs = require("express-handlebars");


module.exports = function(app) {
    // var hbs = exphbs.create({ /* config */ });
     
    // Register `hbs.engine` with the Express app. 
    // app.engine('handlebars', hbs.engine);
    // app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    // app.set('view engine', 'handlebars');

    //Get the model from the db
    app.get("/api/glassdoor_data", function(req, res) {
        db.glassdoor_comments.findAll({
                limit: 100,
                order: [
                    ['id', 'DESC']
                ]
            })
            .then(function(dbglassdoor_comments) {
                res.json(dbglassdoor_comments);
            });
    });

    app.get("/api/results_data", function(req, res) {

        // var resultsObj = compareUserResponses(req.body, resultsObj);
        // console.log(resultsObj);
        db.glassdoor_comments.findAll({ 
            where: {
                id:null
            },
            limit: 100 })
        .then(function(results) {
            res.json(results);
        })
        .catch(function(err){
            console.log("err in get: " + err);
            res.json(err);
        });

        // console.log(req.body);
        //var resultsObj = compareUserResponses(req.body);
        //console.log(resultsObj);
    });

    // POST route for posting a quiz to the db
    app.post("/api/results_data", function(req, res) {
        if (req.body["scores"] === undefined) {
            return res.json({
                Title: "An Error was Detected",
                Description: "Please make sure your request is an object, with a key named 'scores' & an array of values"
            });
        }  

        else {
            var resultsObj;
            compareUserResponses(req.body["scores"], function(cb){
                resultsObj = cb;
            });

            db.glassdoor_comments.create({
                Age: req.body["scores"][0],
                Gender: req.body["scores"][1],
                MaritalStatus: req.body["scores"][2],
                Education: req.body["scores"][3],
                StandardHours: req.body["scores"][4],
                BusinessTravel: req.body["scores"][5],
                DistanceFromHome: req.body["scores"][6],
                OverTime: req.body["scores"][7],
                AbsentHours: req.body["scores"][8],
                WorkLifeBalance: req.body["scores"][9],
                StockOptions: req.body["scores"][10],
                PercentSalaryHike: req.body["scores"][11],
                TrainingTimesLastYear: req.body["scores"][12],
                YearsSinceLastPromotion: req.body["scores"][13],
                PerformanceRating: req.body["scores"][14],
                HourlyRate: req.body["scores"][15],
                JobInvolvement: req.body["scores"][16],
                EnvironmentSatisfaction: req.body["scores"][17],
                RelationshipSatisfaction: req.body["scores"][18],
                YearsAtCompany: req.body["scores"][19],
                YearsWithCurrManager: req.body["scores"][20],
                NumCompaniesWorked: req.body["scores"][21],
            })
            .then(function(data) {
                return res.json(resultsObj);
                
            })
            .catch(err => {
                
                return res.json({
                    Title: "An Error Has Ocurred",
                    Description: "Could not query the database"
                });
                // return res.json(err);
            });
        }
    });  
};