/*
### Receta - Categorias:
* id
* id de la receta
* id de la categoria
 */


import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const RecetaCategoria = sequelize.define("RecetaCategoria", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idReceta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default RecetaCategoria