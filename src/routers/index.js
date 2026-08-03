import { Router } from 'express'

import { usuarioRouter } from "./usuario-router.js"
import { categoriaRouter } from "./categoria-router.js"
import { comentarioCalificacionRecetaUsuarioRouter } from "./comentario-calificacion-receta-usuario-router.js"
import { detalleListaCompraRouter } from "./detalle-lista-compra-router.js"
import { ingredienteRecetaPreparacionRouter } from "./ingrediente-receta-preparacion-router.js"
import { listaCompraRouter } from "./lista-compra-router.js"
import { nivelDificultadRouter } from "./nivel-dificultad-router.js"
import { preparacionRouter } from "./preparacion-router.js"
import { recetaRouter } from "./receta-router.js"
import { recetaCategoriaRouter } from "./receta-categoria-router.js"
import { tipoCocinaRouter } from "./tipo-cocina-router.js"
import { unidadMedidaRouter } from "./unidad-medida-router.js"

const router = Router()

router.use("/usuarios", usuarioRouter)
router.use("/categorias", categoriaRouter)
router.use("/comentarios-calificaciones-recetas-usuarios", comentarioCalificacionRecetaUsuarioRouter)
router.use("/detalles-recetas", detalleListaCompraRouter)
router.use("/detalle-lista-compra", detalleListaCompraRouter)
router.use("/ingredientes-recetas-preparaciones", ingredienteRecetaPreparacionRouter)
router.use("/unidades-medida", unidadMedidaRouter)
router.use("/listas-compras", listaCompraRouter)
router.use("/tipos-cocina", tipoCocinaRouter)
router.use("/niveles-dificultad", nivelDificultadRouter)
router.use("/preparaciones", preparacionRouter)
router.use("/recetas", recetaRouter)
router.use("/recetas-categorias", recetaCategoriaRouter)

export default router
