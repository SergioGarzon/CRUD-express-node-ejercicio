import { ListaCompra } from "../models/index.js"

export const getAllListaCompras = async (req, res) => {
    try {
        const todasListasCompra = await ListaCompra.findAll()
        res.json(todasListasCompra)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getListaCompraById = async (req, res) => {
    try {        
        const listaCompra = await ListaCompra.findByPk(req.params.id)
        if (!listaCompra) {
            return res.status(404).json({ message: "Lista de compra no encontrada" })
        }
        res.json(listaCompra)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createListaCompra = async (req, res) => {
    try {
        const nuevaListaCompra = await ListaCompra.create(req.body)
        res.status(201).json(nuevaListaCompra)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateListaCompra = async (req, res) => {
    try {
        const listaCompra = await ListaCompra.findByPk(req.params.id)
        if (!listaCompra) {
            return res.status(404).json({ message: "Lista de compra no encontrada" })
        }
        await listaCompra.update(req.body)
        res.json(listaCompra)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteListaCompra = async (req, res) => {
    try {
        const listaCompra = await ListaCompra.findByPk(req.params.id)
        if (!listaCompra) {
            return res.status(404).json({ message: "Lista de compra no encontrada" })
        }
        await listaCompra.destroy()
        res.json({ message: "Lista de compra eliminada" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

