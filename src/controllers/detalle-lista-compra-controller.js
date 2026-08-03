import { DetalleListaCompra } from "../models/index.js"

export const getAllDetallesListaCompra = async (req, res) => {
    try {
        const todosDetallesListaCompra = await DetalleListaCompra.findAll()
        res.json(todosDetallesListaCompra)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getDetalleListaCompraById = async (req, res) => {
    try {        
        const detalleListaCompra = await DetalleListaCompra.findByPk(req.params.id)
        if (!detalleListaCompra) {
            return res.status(404).json({ message: "Detalle de lista de compra no encontrado" })
        }
        res.json(detalleListaCompra)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createDetalleListaCompra = async (req, res) => {
    try {
        const nuevoDetalleListaCompra = await DetalleListaCompra.create(req.body)
        res.status(201).json(nuevoDetalleListaCompra)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateDetalleListaCompra = async (req, res) => {
    try {
        const detalleListaCompra = await DetalleListaCompra.findByPk(req.params.id)
        if (!detalleListaCompra) {
            return res.status(404).json({ message: "Detalle de lista de compra no encontrado" })
        }
        await detalleListaCompra.update(req.body)
        res.json(detalleListaCompra)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteDetalleListaCompra = async (req, res) => {
    try {
        const detalleListaCompra = await DetalleListaCompra.findByPk(req.params.id)
        if (!detalleListaCompra) {
            return res.status(404).json({ message: "Detalle de lista de compra no encontrado" })
        }
        await detalleListaCompra.destroy()
        res.json({ message: "Detalle de lista de compra eliminado" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

