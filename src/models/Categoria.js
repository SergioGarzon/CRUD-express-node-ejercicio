/*
### Categoria:
* id
* descripcion
*/

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Categoria = sequelize.define("Categoria", {
  idCategoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
})

export default Categoria