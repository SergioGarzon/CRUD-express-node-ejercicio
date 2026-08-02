/*

### Nivel de dificultad
* idNivelDificultad
* descripcion (fácil, medio, difícil) 
* La receta conoce a el nivel de dificultad

*/

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const NivelDificultad = sequelize.define("NivelDificultad", {
    idNivelDificultad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
})

export default NivelDificultad