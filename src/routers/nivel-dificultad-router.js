import { Router } from "express"

import { 
    getAllNivelesDificultad, 
    getNivelDificultadById, 
    createNivelDificultad,
    updateNivelDificultad,
    deleteNivelDificultad 
} from "../controllers/nivel-dificultad-controller.js"

export const nivelDificultadRouter = Router()

nivelDificultadRouter.get("/", getAllNivelesDificultad)
nivelDificultadRouter.get("/:id", getNivelDificultadById)
nivelDificultadRouter.post("/", createNivelDificultad)
nivelDificultadRouter.put("/:id", updateNivelDificultad)
nivelDificultadRouter.delete("/:id", deleteNivelDificultad)
