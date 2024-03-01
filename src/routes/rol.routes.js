import { Router } from "express";
import { getAll, getById, create, update, remove } from '../controllers/rol.controller.js'

const router = Router()

router.get('/rol', getAll)
router.get('/rol/:id', getById)
router.post('/rol', create)
router.put('/rol/:id', update)
router.delete('/rol/:id', remove)

export default router