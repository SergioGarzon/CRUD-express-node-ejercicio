import { NivelDificultad } from "../models/index.js"

export const getAllNivelesDificultad = async (req, res) => {
    try {
        const todosNivelesDificultad = await NivelDificultad.findAll()
        res.json(todosNivelesDificultad)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getNivelDificultadById = async (req, res) => {
    try {        
        const nivelDificultad = await NivelDificultad.findByPk(req.params.id)
        if (!nivelDificultad) {
            return res.status(404).json({ message: "Nivel de dificultad no encontrado" })
        }
        res.json(nivelDificultad)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createNivelDificultad = async (req, res) => {
    try {
        const nuevoNivelDificultad = await NivelDificultad.create(req.body)
        res.status(201).json(nuevoNivelDificultad)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateNivelDificultad = async (req, res) => {
    try {
        const nivelDificultad = await NivelDificultad.findByPk(req.params.id)
        if (!nivelDificultad) {
            return res.status(404).json({ message: "Nivel de dificultad no encontrado" })
        }
        await nivelDificultad.update(req.body)
        res.json(nivelDificultad)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteNivelDificultad = async (req, res) => {
    try {
        const nivelDificultad = await NivelDificultad.findByPk(req.params.id)
        if (!nivelDificultad) {
            return res.status(404).json({ message: "Nivel de dificultad no encontrado" })
        }
        await nivelDificultad.destroy()
        res.json({ message: "Nivel de dificultad eliminado" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

