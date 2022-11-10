const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      // type: DataTypes.INTEGER,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      // defaultValue: 700,
      // autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    height: {
      type: DataTypes.STRING,//o INTEGER
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,//o INTEGER
      allowNull: false
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // temperament: {
    //   type: DataTypes.STRING,
    //   // allowNull: true
    // }
  },
  {
    timestamps: false
  }
  );
};
