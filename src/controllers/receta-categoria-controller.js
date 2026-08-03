import { RecetaCategoria } from "../models/index.js"

export const getAllRecetaCategorias = async (req, res) => {
    try {
        const todasRecetaCategorias = await RecetaCategoria.findAll()
        res.json(todasRecetaCategorias)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getRecetaCategoriaById = async (req, res) => {
    try {        
        const recetaCategoria = await RecetaCategoria.findByPk(req.params.id)
        if (!recetaCategoria) {
            return res.status(404).json({ message: "Receta categoría no encontrada" })
        }
        res.json(recetaCategoria)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createRecetaCategoria = async (req, res) => {
    try {
        const nuevaRecetaCategoria = await RecetaCategoria.create(req.body)
        res.status(201).json(nuevaRecetaCategoria)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateRecetaCategoria = async (req, res) => {
    try {
        const recetaCategoria = await RecetaCategoria.findByPk(req.params.id)
        if (!recetaCategoria) {
            return res.status(404).json({ message: "Receta categoría no encontrada" })
        }
        await recetaCategoria.update(req.body)
        res.json(recetaCategoria)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteRecetaCategoria = async (req, res) => {
    try {
        const recetaCategoria = await RecetaCategoria.findByPk(req.params.id)
        if (!recetaCategoria) {
            return res.status(404).json({ message: "Receta categoría no encontrada" })
        }
        await recetaCategoria.destroy()
        res.json({ message: "Receta categoría eliminada" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

