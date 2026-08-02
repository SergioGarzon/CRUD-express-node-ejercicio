/*
### Unidad Medida
> Unidad de medida (ej: 'gramos', 'tazas', 'unidades')
* id
* descripcion 

*/

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const UnidadMedida = sequelize.define("UnidadMedida", {
    idUnidadMedida: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
})


export default UnidadMedida

