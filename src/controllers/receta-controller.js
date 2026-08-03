import { Receta } from "../models/index.js"

export const getAllRecetas = async (req, res) => {
    try {
        const todasRecetas = await Receta.findAll()
        res.json(todasRecetas)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getRecetaById = async (req, res) => {
    try {        
        const receta = await Receta.findByPk(req.params.id)
        if (!receta) {
            return res.status(404).json({ message: "Receta no encontrada" })
        }
        res.json(receta)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createReceta = async (req, res) => {
    try {
        const nuevaReceta = await Receta.create(req.body)
        res.status(201).json(nuevaReceta)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateReceta = async (req, res) => {
    try {
        const receta = await Receta.findByPk(req.params.id)
        if (!receta) {
            return res.status(404).json({ message: "Receta no encontrada" })
        }
        await receta.update(req.body)
        res.json(receta)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteReceta = async (req, res) => {
    try {
        const receta = await Receta.findByPk(req.params.id)
        if (!receta) {
            return res.status(404).json({ message: "Receta no encontrada" })
        }
        await receta.destroy()
        res.json({ message: "Receta eliminada" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

