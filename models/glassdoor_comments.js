/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var Glassdoor_comments = sequelize.define('glassdoor_comments', {
        Age: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        BusinessTravel: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        DailyRate: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        DistanceFromHome: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        Education: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        EnvironmentSatisfaction: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        Gender: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        HourlyRate: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        JobInvolvement: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        JobSatisfaction: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        MaritalStatus: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        MonthlyIncome: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        NumCompaniesWorked: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        OverTime: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        PercentSalaryHike: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        PerformanceRating: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        RelationshipSatisfaction: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        StandardHours: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        StockOptionLevel: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        TrainingTimesLastYear: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        WorkLifeBalance: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        YearsAtCompany: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        YearsInCurrentRole: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        YearsSinceLastPromotion: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        YearsWithCurrManager: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        AbsentHours: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        }
    }, {
        tableName: 'glassdoor_comments'
    });
    return Glassdoor_comments;
};