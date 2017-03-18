
// creating burger model using sequelize
module.exports = function(sequelize, DataTypes) {
  // variable Burger is data model
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Burger;
};