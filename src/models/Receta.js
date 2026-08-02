/*

### Receta:  
> Cada receta tiene:
* ID único, 
* título, 
* descripción corta, 
* tiempo estimado de preparación, 
* tiempo de cocción, 
* nivel de dificultad
* Es creada por un único usuario. 
* Las recetas pertenecen a una o más Categorías (ej: 'Postres', 'Platos Principales', 'Vegetariano', 'Sin Gluten'). 
* También se pueden clasificar por tipo de Cocina (ej: 'Italiana', 'Mexicana', 'Asiática'). 
* Cada receta se compone de una lista de Ingredientes necesarios y una secuencia de Pasos de Preparación. 

*/

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Receta = sequelize.define("Receta", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    descripcionCorta: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tiempoPreparacion: {
        type: DataTypes.DATE,
        allowNull: false    
    },
    tiempoCoccion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    idNivelDificultad: {
        type: DataTypes.INTEGER,
        allowNull: false        
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idTipoCocina: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Receta