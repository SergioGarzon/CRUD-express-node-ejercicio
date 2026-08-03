import { TipoCocina } from "../models/index.js"

export const getAllTiposCocina = async (req, res) => {
    try {
        const todosTiposCocina = await TipoCocina.findAll()
        res.json(todosTiposCocina)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getTipoCocinaById = async (req, res) => {
    try {        
        const tipoCocina = await TipoCocina.findByPk(req.params.id)
        if (!tipoCocina) {
            return res.status(404).json({ message: "Tipo de cocina no encontrado" })
        }
        res.json(tipoCocina)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createTipoCocina = async (req, res) => {
    try {
        const nuevoTipoCocina = await TipoCocina.create(req.body)
        res.status(201).json(nuevoTipoCocina)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateTipoCocina = async (req, res) => {
    try {
        const tipoCocina = await TipoCocina.findByPk(req.params.id)
        if (!tipoCocina) {
            return res.status(404).json({ message: "Tipo de cocina no encontrado" })
        }
        await tipoCocina.update(req.body)
        res.json(tipoCocina)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteTipoCocina = async (req, res) => {
    try {
        const tipoCocina = await TipoCocina.findByPk(req.params.id)
        if (!tipoCocina) {
            return res.status(404).json({ message: "Tipo de cocina no encontrado" })
        }
        await tipoCocina.destroy()
        res.json({ message: "Tipo de cocina eliminado" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

