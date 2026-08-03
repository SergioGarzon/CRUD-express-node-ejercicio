import { Router } from "express"

import { 
    getAllRecetas, 
    getRecetaById, 
    createReceta,
    updateReceta,
    deleteReceta 
} from "../controllers/receta-controller.js"

export const recetaRouter = Router()

recetaRouter.get("/", getAllRecetas)
recetaRouter.get("/:id", getRecetaById)
recetaRouter.post("/", createReceta)
recetaRouter.put("/:id", updateReceta)
recetaRouter.delete("/:id", deleteReceta)
