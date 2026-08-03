import { Router } from "express"

import { 
    getComentariosCalificacionesRecetasUsuarios,
    getComentarioCalificacionRecetaUsuarioById,
    createComentarioCalificacionRecetaUsuario,
    updateComentarioCalificacionRecetaUsuario,
    deleteComentarioCalificacionRecetaUsuario
} from "../controllers/comentario-calificacion-receta-usuario-controller.js"

export const comentarioCalificacionRecetaUsuarioRouter = Router()

comentarioCalificacionRecetaUsuarioRouter.get("/", getComentariosCalificacionesRecetasUsuarios)
comentarioCalificacionRecetaUsuarioRouter.get("/:id", getComentarioCalificacionRecetaUsuarioById)
comentarioCalificacionRecetaUsuarioRouter.post("/", createComentarioCalificacionRecetaUsuario)
comentarioCalificacionRecetaUsuarioRouter.put("/:id", updateComentarioCalificacionRecetaUsuario)
comentarioCalificacionRecetaUsuarioRouter.delete("/:id", deleteComentarioCalificacionRecetaUsuario)
