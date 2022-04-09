const Sequelize = require("sequelize");
const sequelize = require("../Util/database");

const Teachers = sequelize.define("teachers",{

    id:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    }},
    {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});

module.exports = Teachers;