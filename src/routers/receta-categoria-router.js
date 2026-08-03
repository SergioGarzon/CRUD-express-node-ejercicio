import { Router } from "express"

import { 
    getAllRecetaCategorias, 
    getRecetaCategoriaById, 
    createRecetaCategoria,
    updateRecetaCategoria,
    deleteRecetaCategoria 
} from "../controllers/receta-categoria-controller.js"

export const recetaCategoriaRouter = Router()

recetaCategoriaRouter.get("/", getAllRecetaCategorias)
recetaCategoriaRouter.get("/:id", getRecetaCategoriaById)
recetaCategoriaRouter.post("/", createRecetaCategoria)
recetaCategoriaRouter.put("/:id", updateRecetaCategoria)
recetaCategoriaRouter.delete("/:id", deleteRecetaCategoria)
