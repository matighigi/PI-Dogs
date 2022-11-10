const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperament', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // id: {
    //     // type: DataTypes.INTEGER,
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   // autoIncrement: true,
    //   allowNull: true,
    //   primaryKey: true
    // }
  },
  {
    timestamps: false
  });
};
