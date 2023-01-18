const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	sequelize.define('Activity', {
		id: {
			type: DataTypes.INTEGER,
      autoIncrement:true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		level: {
			type: DataTypes.ENUM('1', '2', '3', '4', '5'),
		},
    duration:{
      type: DataTypes.INTEGER,
    },
		season: {
			type: DataTypes.ENUM('spring', 'summer', 'fall' ,'winter '),
		},
	},{timestamps:false});
};
