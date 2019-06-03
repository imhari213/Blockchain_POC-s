'use strict';
module.exports = (sequelize, DataTypes) => {
  var Goal = sequelize.define('Goal', {
    email: DataTypes.STRING,
    goal: DataTypes.INTEGER,
    status: DataTypes.STRING

  }, {});   
  Goal.associate = function(models) {
    // associations can be defined here
  };
  return Goal;
};