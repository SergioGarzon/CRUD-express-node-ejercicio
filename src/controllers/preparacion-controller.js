import { Preparacion } from "../models/index.js"

export const getAllPreparaciones = async (req, res) => {
    try {
        const todasPreparaciones = await Preparacion.findAll()
        res.json(todasPreparaciones)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getPreparacionById = async (req, res) => {
    try {        
        const preparacion = await Preparacion.findByPk(req.params.id)
        if (!preparacion) {
            return res.status(404).json({ message: "Preparación no encontrada" })
        }
        res.json(preparacion)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createPreparacion = async (req, res) => {
    try {
        const nuevaPreparacion = await Preparacion.create(req.body)
        res.status(201).json(nuevaPreparacion)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updatePreparacion = async (req, res) => {
    try {
        const preparacion = await Preparacion.findByPk(req.params.id)
        if (!preparacion) {
            return res.status(404).json({ message: "Preparación no encontrada" })
        }
        await preparacion.update(req.body)
        res.json(preparacion)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deletePreparacion = async (req, res) => {
    try {
        const preparacion = await Preparacion.findByPk(req.params.id)
        if (!preparacion) {
            return res.status(404).json({ message: "Preparación no encontrada" })
        }
        await preparacion.destroy()
        res.json({ message: "Preparación eliminada" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

