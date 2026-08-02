/*
### Ingredientes:  
> Para cada ingrediente en una receta, se debe especificar:
* id
* descripcion
* Cantidad (ej: '200')
* Unidad de medida (ej: 'gramos', 'tazas', 'unidades'). 
* Un mismo ingrediente (ej: 'Harina de trigo') puede usarse en muchas recetas. 

*/


import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Ingrediente = sequelize.define("Ingrediente", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idUnidadMedida: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Ingrediente

