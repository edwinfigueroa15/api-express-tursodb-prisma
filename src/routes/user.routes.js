import { Router } from "express";

const router = Router()

router.get('/user', (req, res) => {
    res.send('<h1>Test de Prisma y Turso - User</h1>')
})

export default router