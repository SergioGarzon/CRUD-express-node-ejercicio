import { Router } from 'express'

import { usuarioRouter } from "./usuario-router.js"

const router = Router()

router.use("/usuarios", usuarioRouter)

export default router
