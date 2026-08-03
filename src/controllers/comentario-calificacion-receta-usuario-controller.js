import { ComentarioCalificacionRecetaUsuario } from "../models/index.js"

export const getComentariosCalificacionesRecetasUsuarios = async (req, res) => {
    try {
        const comentariosCalificacionesRecetasUsuarios = await ComentarioCalificacionRecetaUsuario.findAll()
        res.json(comentariosCalificacionesRecetasUsuarios)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getComentarioCalificacionRecetaUsuarioById = async (req, res) => {
    try {        
        const comentarioCalificacionRecetaUsuario = await ComentarioCalificacionRecetaUsuario.findByPk(req.params.id)
        if (!comentarioCalificacionRecetaUsuario) {
            return res.status(404).json({ message: "Comentario/Cálificación/Receta/Usuario no encontrado" })
        }
        res.json(comentarioCalificacionRecetaUsuario)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createComentarioCalificacionRecetaUsuario = async (req, res) => {
    try {
        const nuevoComentarioCalificacionRecetaUsuario = await ComentarioCalificacionRecetaUsuario.create(req.body)
        res.status(201).json(nuevoComentarioCalificacionRecetaUsuario)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateComentarioCalificacionRecetaUsuario = async (req, res) => {
    try {
        const comentarioCalificacionRecetaUsuario = await ComentarioCalificacionRecetaUsuario.findByPk(req.params.id)
        if (!comentarioCalificacionRecetaUsuario) {
            return res.status(404).json({ message: "Comentario/Cálificación/Receta/Usuario no encontrado" })
        }
        await comentarioCalificacionRecetaUsuario.update(req.body)
        res.json(comentarioCalificacionRecetaUsuario)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteComentarioCalificacionRecetaUsuario = async (req, res) => {
    try {
        const comentarioCalificacionRecetaUsuario = await ComentarioCalificacionRecetaUsuario.findByPk(req.params.id)
        if (!comentarioCalificacionRecetaUsuario) {
            return res.status(404).json({ message: "Comentario/Cálificación/Receta/Usuario no encontrado" })
        }
        await comentarioCalificacionRecetaUsuario.destroy()
        res.json({ message: "Comentario/Cálificación/Receta/Usuario eliminado" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

