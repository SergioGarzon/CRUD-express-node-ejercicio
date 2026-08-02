import { Router } from "express"

import { 
    getAllUsers, 
    getUserById, 
    createUser,
    updateUser,
    deleteUser 
} from "../controllers/usuario-controller.js"

export const usuarioRouter = Router()

usuarioRouter.get("/", getAllUsers)
usuarioRouter.get("/:id", getUserById)
usuarioRouter.post("/", createUser)
usuarioRouter.put("/:id", updateUser)
usuarioRouter.delete("/:id", deleteUser)

