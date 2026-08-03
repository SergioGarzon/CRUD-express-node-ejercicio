import { IngredienteRecetaPreparacion } from "../models/index.js"

export const getAllIngredientesRecetaPreparacion = async (req, res) => {
    try {
        const todosIngredientesRecetaPreparacion = await IngredienteRecetaPreparacion.findAll()
        res.json(todosIngredientesRecetaPreparacion)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getIngredienteRecetaPreparacionById = async (req, res) => {
    try {        
        const ingredienteRecetaPreparacion = await IngredienteRecetaPreparacion.findByPk(req.params.id)
        if (!ingredienteRecetaPreparacion) {
            return res.status(404).json({ message: "Ingrediente de receta de preparación no encontrado" })
        }
        res.json(ingredienteRecetaPreparacion)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createIngredienteRecetaPreparacion = async (req, res) => {
    try {
        const nuevoIngredienteRecetaPreparacion = await IngredienteRecetaPreparacion.create(req.body)
        res.status(201).json(nuevoIngredienteRecetaPreparacion)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateIngredienteRecetaPreparacion = async (req, res) => {
    try {
        const ingredienteRecetaPreparacion = await IngredienteRecetaPreparacion.findByPk(req.params.id)
        if (!ingredienteRecetaPreparacion) {
            return res.status(404).json({ message: "Ingrediente de receta de preparación no encontrado" })
        }
        await ingredienteRecetaPreparacion.update(req.body)
        res.json(ingredienteRecetaPreparacion)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteIngredienteRecetaPreparacion = async (req, res) => {
    try {
        const ingredienteRecetaPreparacion = await IngredienteRecetaPreparacion.findByPk(req.params.id)
        if (!ingredienteRecetaPreparacion) {
            return res.status(404).json({ message: "Ingrediente de receta de preparación no encontrado" })
        }
        await ingredienteRecetaPreparacion.destroy()
        res.json({ message: "Ingrediente de receta de preparación eliminado" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

