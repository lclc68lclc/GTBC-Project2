//here is where I will add in the work for the sequelize routes

/*sequelize.query('SELECT * FROM projects WHERE status = ?',
  { replacements: ['active'], type: sequelize.QueryTypes.SELECT }
).then(projects => {
  console.log(projects)
})*/

//the above is how I will map the query from the api routes to the html

var db = require("../models");

module.exports = function(app) {
    app.post("/api/", function(req, res) {
        console.log(req.body);
        db.User.create({
            Age: ,
            BusinessTravel: ,
            DailyRate: ,
            DistanceFromHome: ,
            Education: ,
            EnvironmentSatisfaction: ,
            Gender: ,
            HourlyRate: ,
            JobInvolvement: ,
            JobSatisfaction: ,
            MaritalStatus: ,
            MonthlyIncome: ,
            NumCompaniesWorked: ,
            OverTime: ,
            PercentSalaryHike: ,
            PerformanceRating: ,
            RelationshipSatisfaction: ,
            StandardHours: StockOptions: ,
            TrainingTimesLastYear: ,
            WorkLifeBalance: ,
            YearsAtCompany: ,
            YearsInCurrentRole: ,
            YearsSinceLastPromotion: ,
            YearsWithCurrManager: ,
            AbsentHours: ,
        });
        .then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.get("/api/", function(req, res) {
        db.User
    })
}