import { Ingrediente } from "../models/index.js"

export const getAllIngredientes = async (req, res) => {
    try {
        const todosIngredientes = await Ingrediente.findAll()
        res.json(todosIngredientes)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getIngredienteById = async (req, res) => {
    try {        
        const ingrediente = await Ingrediente.findByPk(req.params.id)
        if (!ingrediente) {
            return res.status(404).json({ message: "Ingrediente no encontrado" })
        }
        res.json(ingrediente)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createIngrediente = async (req, res) => {
    try {
        const nuevoIngrediente = await Ingrediente.create(req.body)
        res.status(201).json(nuevoIngrediente)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateIngrediente = async (req, res) => {
    try {
        const ingrediente = await Ingrediente.findByPk(req.params.id)
        if (!ingrediente) {
            return res.status(404).json({ message: "Ingrediente no encontrado" })
        }
        await ingrediente.update(req.body)
        res.json(ingrediente)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteIngrediente = async (req, res) => {
    try {
        const ingrediente = await Ingrediente.findByPk(req.params.id)
        if (!ingrediente) {
            return res.status(404).json({ message: "Ingrediente no encontrado" })
        }
        await ingrediente.destroy()
        res.json({ message: "Ingrediente eliminado" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

