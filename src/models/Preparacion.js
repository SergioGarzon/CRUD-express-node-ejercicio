/*
### Preparación:
> Los pasos de preparación:
* IdPreparacion: Deben estar numerados para indicar el orden correcto
* Descripcion: Deben contener el texto de la instrucción. 
 */

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Preparacion = sequelize.define("Preparacion", {
    idPreparacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
})

export default Preparacion