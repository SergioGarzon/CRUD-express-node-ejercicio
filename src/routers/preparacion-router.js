import { Router } from "express"

import { 
    getAllPreparaciones, 
    getPreparacionById, 
    createPreparacion,
    updatePreparacion,
    deletePreparacion 
} from "../controllers/preparacion-controller.js"

export const preparacionRouter = Router()

preparacionRouter.get("/", getAllPreparaciones)
preparacionRouter.get("/:id", getPreparacionById)
preparacionRouter.post("/", createPreparacion)
preparacionRouter.put("/:id", updatePreparacion)
preparacionRouter.delete("/:id", deletePreparacion)
