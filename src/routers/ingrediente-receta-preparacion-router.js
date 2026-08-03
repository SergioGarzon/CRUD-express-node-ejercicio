import { Router } from "express"

import { 
    getAllIngredientesRecetaPreparacion,
    getIngredienteRecetaPreparacionById,
    createIngredienteRecetaPreparacion,
    updateIngredienteRecetaPreparacion,
    deleteIngredienteRecetaPreparacion
} from "../controllers/ingrediente-receta-preparacion-controller.js"

export const ingredienteRecetaPreparacionRouter = Router()

ingredienteRecetaPreparacionRouter.get("/", getAllIngredientesRecetaPreparacion)
ingredienteRecetaPreparacionRouter.get("/:id", getIngredienteRecetaPreparacionById)
ingredienteRecetaPreparacionRouter.post("/", createIngredienteRecetaPreparacion)
ingredienteRecetaPreparacionRouter.put("/:id", updateIngredienteRecetaPreparacion)
ingredienteRecetaPreparacionRouter.delete("/:id", deleteIngredienteRecetaPreparacion)
