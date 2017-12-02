//here is where I will add in the work for the sequelize routes

/*sequelize.query('SELECT * FROM projects WHERE status = ?',
  { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
).then(projects => {
  console.log(projects)
})*/

//the above is how I will map the query from the api routes to the html

var db = require("../models");

var derivedTable =

    module.exports = function(app) {
        app.post("/api/", function(req, res) {
            console.log(req.body);
            db.User.create({
                Age: req.body[0],
                Gender: req.body[1],
                MaritalStatus: req.body[2],
                Education: req.body[3],
                StandardHours: req.body[4],
                BusinessTravel: req.body[5],
                DistanceFromHome: req.body[6],
                OverTime: req.body[7],
                DailyRate: req.body[8],
                AbsentHours: req.body[9],
                WorkLifeBalance: req.body[10],
                StockOptions: req.body[11],
                PercentSalaryHike: req.body[12],
                TrainingTimesLastYear: req.body[13],
                YearsSinceLastPromotion: req.body[14],
                PerformanceRating: req.body[15],
                HourlyRate: req.body[16],
                JobInvolvement: req.body[17],
                EnvironmentSatisfaction: req.body[18],
                RelationshipSatisfaction: req.body[19],
                YearsAtCompany: req.body[20],
                YearsWithCurrManager: req.body[21],
                NumCompaniesWorked: req.body[22],
            });
            .then(function(dbPost) {
                res.json(dbPost);
            });
        });

        app.get("/api/", function(req, res) {
                    db.User.query('Select AVG(?) from (SELECT * FROM glassdoor_comments WHERE MaritalStatus= ? AND Education = ? AND StandardHours = 80 AND BusinessTravel = ?)', { replacements: ['active'], type: sequelize.QueryTypes.SELECT }).then(projects => {
                        console.log(projects);
                    })
                }