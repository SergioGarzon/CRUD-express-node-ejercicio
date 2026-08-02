import { Usuario } from "../models/index.js"

export const getAllUsers = async (req, res) => {
    try {
        const todosUsuarios = await Usuario.findAll()
        res.json(todosUsuarios)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {        
        const usuario = await Usuario.findByPk(req.params.id)
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }
        res.json(usuario)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body)
        res.status(201).json(nuevoUsuario)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateUser = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id)
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }
        await usuario.update(req.body)
        res.json(usuario)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteUser = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id)
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }
        await usuario.destroy()
        res.json({ message: "Usuario eliminado" })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
}

