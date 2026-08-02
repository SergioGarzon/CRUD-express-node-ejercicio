/*
### Ingredientes - Receta - Preparacion:
* Id
* Id de la receta
* Id de ingredientes
* Id de preparacion
*/

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const IngredienteRecetaPreparacion = sequelize.define("IngredienteRecetaPreparacion", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idReceta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idIngrediente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idPreparacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


export default IngredienteRecetaPreparacion
