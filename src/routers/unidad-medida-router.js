import { Router } from "express"

import { 
    getAllUnidadesMedida, 
    getUnidadMedidaById, 
    createUnidadMedida,
    updateUnidadMedida,
    deleteUnidadMedida 
} from "../controllers/unidad-medida-controller.js"

export const unidadMedidaRouter = Router()

unidadMedidaRouter.get("/", getAllUnidadesMedida)
unidadMedidaRouter.get("/:id", getUnidadMedidaById)
unidadMedidaRouter.post("/", createUnidadMedida)
unidadMedidaRouter.put("/:id", updateUnidadMedida)
unidadMedidaRouter.delete("/:id", deleteUnidadMedida)
