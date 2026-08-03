import { Router } from "express"

import { 
    getAllListaCompras, 
    getListaCompraById, 
    createListaCompra,
    updateListaCompra,
    deleteListaCompra 
} from "../controllers/lista-compra-controller.js"

export const listaCompraRouter = Router()

listaCompraRouter.get("/", getAllListaCompras)
listaCompraRouter.get("/:id", getListaCompraById)
listaCompraRouter.post("/", createListaCompra)
listaCompraRouter.put("/:id", updateListaCompra)
listaCompraRouter.delete("/:id", deleteListaCompra)
