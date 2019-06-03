'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    goal: DataTypes.INTEGER,
    stepsReached: DataTypes.INTEGER,
    walletId: DataTypes.STRING,
    contact: DataTypes.STRING,
    accessToken: DataTypes.STRING,
    refreshToken: DataTypes.STRING
  }, {});   
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};