import { Categoria } from "../models/index.js"

export const getAllCategorias = async (req, res) => {
    try {
        const todasCategorias = await Categoria.findAll()
        res.json(todasCategorias)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getCategoriaById = async (req, res) => {
    try {        
        const categoria = await Categoria.findByPk(req.params.id)
        if (!categoria) {
            return res.status(404).json({ message: "Categoria no encontrada" })
        }
        res.json(categoria)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createCategoria = async (req, res) => {
    try {
        const nuevaCategoria = await Categoria.create(req.body)
        res.status(201).json(nuevaCategoria)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id)
        if (!categoria) {
            return res.status(404).json({ message: "Categoria no encontrada" })
        }
        await categoria.update(req.body)
        res.json(categoria)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id)
        if (!categoria) {
            return res.status(404).json({ message: "Categoria no encontrada" })
        }
        await categoria.destroy()
        res.json({ message: "Categoria eliminada" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

