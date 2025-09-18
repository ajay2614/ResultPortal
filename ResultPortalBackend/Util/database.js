const Sequelize = require('sequelize');

const sequelize = new Sequelize("nodedb","root","Hello123!@#",{
    dialect:"mysql"
});

module.exports = sequelize;