/*
### Detalle Lista de Compras

* idDetalleListaCompra
* idIngrediente
* idReceta
* cantidad
 */

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const DetalleListaCompra = sequelize.define("DetalleListaCompra", {
    idDetalleListaCompra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idIngrediente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idReceta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default DetalleListaCompra