import { Router } from "express"

import { 
    getAllTiposCocina,
    getTipoCocinaById,
    createTipoCocina,
    updateTipoCocina,
    deleteTipoCocina
} from "../controllers/tipo-cocina-controller.js"

export const tipoCocinaRouter = Router()

tipoCocinaRouter.get("/", getAllTiposCocina)
tipoCocinaRouter.get("/:id", getTipoCocinaById)
tipoCocinaRouter.post("/", createTipoCocina)
tipoCocinaRouter.put("/:id", updateTipoCocina)
tipoCocinaRouter.delete("/:id", deleteTipoCocina)
