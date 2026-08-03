import { UnidadMedida } from "../models/index.js"

export const getAllUnidadesMedida = async (req, res) => {
    try {
        const todasUnidadesMedida = await UnidadMedida.findAll()
        res.json(todasUnidadesMedida)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUnidadMedidaById = async (req, res) => {
    try {        
        const unidadMedida = await UnidadMedida.findByPk(req.params.id)
        if (!unidadMedida) {
            return res.status(404).json({ message: "Unidad de medida no encontrada" })
        }
        res.json(unidadMedida)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createUnidadMedida = async (req, res) => {
    try {
        const nuevaUnidadMedida = await UnidadMedida.create(req.body)
        res.status(201).json(nuevaUnidadMedida)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateUnidadMedida = async (req, res) => {
    try {
        const unidadMedida = await UnidadMedida.findByPk(req.params.id)
        if (!unidadMedida) {
            return res.status(404).json({ message: "Unidad de medida no encontrada" })
        }
        await unidadMedida.update(req.body)
        res.json(unidadMedida)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteUnidadMedida = async (req, res) => {
    try {
        const unidadMedida = await UnidadMedida.findByPk(req.params.id)
        if (!unidadMedida) {
            return res.status(404).json({ message: "Unidad de medida no encontrada" })
        }
        await unidadMedida.destroy()
        res.json({ message: "Unidad de medida eliminada" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

