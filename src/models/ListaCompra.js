/*

### Lista de Compras
> Además, los usuarios pueden crear Listas de Compras personalizadas. Una lista de compras tiene un nombre (ej: "Compra semanal", "Ingredientes Torta") y pertenece a un usuario. El usuario puede agregar ingredientes a su lista, especificando la cantidad y unidad que necesita comprar. Estos ingredientes pueden provenir de una o varias recetas o ser añadidos
* idListaCompra
* nombre
* idUsuario
* idDetalleListaCompra

*/

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const ListaCompra = sequelize.define("ListaCompra", {
    idListaCompra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    idDetalleListaCompra: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default ListaCompra