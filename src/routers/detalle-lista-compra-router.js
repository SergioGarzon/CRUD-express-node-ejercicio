import { Router } from "express"

import { 
    getAllDetallesListaCompra, 
    getDetalleListaCompraById, 
    createDetalleListaCompra,
    updateDetalleListaCompra,
    deleteDetalleListaCompra 
} from "../controllers/detalle-lista-compra-controller.js"

export const detalleListaCompraRouter = Router()

detalleListaCompraRouter.get("/", getAllDetallesListaCompra)
detalleListaCompraRouter.get("/:id", getDetalleListaCompraById)
detalleListaCompraRouter.post("/", createDetalleListaCompra)
detalleListaCompraRouter.put("/:id", updateDetalleListaCompra)
detalleListaCompraRouter.delete("/:id", deleteDetalleListaCompra)
