/*
### Usuarios:  
> Los Usuarios se registran:
* Nombre de usuario (único) 
* email
* contraseña. 
 */

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Usuario = sequelize.define("Usuario", {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreUsuario: { 
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    contrasenia: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
})

export default Usuario