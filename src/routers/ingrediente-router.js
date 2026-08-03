import { Router } from "express"

import { 
    getAllIngredientes, 
    getIngredienteById, 
    createIngrediente,
    updateIngrediente,
    deleteIngrediente 
} from "../controllers/ingrediente-controller.js"

export const ingredienteRouter = Router()

ingredienteRouter.get("/", getAllIngredientes)
ingredienteRouter.get("/:id", getIngredienteById)
ingredienteRouter.post("/", createIngrediente)
ingredienteRouter.put("/:id", updateIngrediente)
ingredienteRouter.delete("/:id", deleteIngrediente)
