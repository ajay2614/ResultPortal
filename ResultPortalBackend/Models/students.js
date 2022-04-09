const Sequelize = require("sequelize");
const sequelize = require("../Util/database");

const Students = sequelize.define("students",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    dob:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    score:{
        type:Sequelize.INTEGER,
    }},
    {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = Students;