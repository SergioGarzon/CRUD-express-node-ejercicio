/*
### ComentarioCalificacionRecetaUsuario:
> Los usuarios pueden valorar las recetas que han probado mediante una Calificación: 
* Asignando un puntaje (ej: de 1 a 5 estrellas). 
* Esta asociado al usuario que emite

> También pueden dejar Comentarios escritos en las recetas, expresando su opinión o haciendo preguntas. Tanto las calificaciones como los comentarios están asociados al usuario que los emite y a la receta correspondiente, y tienen una fecha de publicación.
* id
* texto correspondiente al comentario
* fecha de publicacion
* Esta asociado al usuario que emite

*/

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const ComentarioCalificacionRecetaUsuario = sequelize.define("ComentarioCalificacionRecetaUsuario", {
    idComentarioCalificacionRecetaUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    puntajeCalificacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    textoComentario: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    fechaPublicacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    idUsuario: {   
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idReceta: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default ComentarioCalificacionRecetaUsuario
