import { Router } from "express";
import { getAll } from '../controllers/user.controller.js'

const router = Router()

router.get('/user', (req, res) => {
    /*
        #swagger.tags = ['User']
        #swagger.summary = 'Get all users'
    */
    getAll(req, res)
})

export default router