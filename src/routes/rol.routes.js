import { Router } from "express";
import { getAll, getById, create, update, remove } from '../controllers/rol.controller.js'

const router = Router()

router.get('/rol', (req, res) => {
    /*
        #swagger.tags = ['Rol']
        #swagger.summary = 'Get all rols'
    */
    getAll(req, res)
})

router.get('/rol/:id', (req, res) => {
    /*
        #swagger.tags = ['Rol']
        #swagger.summary = 'Get rol by ID'

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Rol ID.',
            required: true,
            type: 'integer'
        }
    */
    getById(req, res)
})

router.post('/rol', (req, res) => {
    /*
        #swagger.tags = ['Rol']
        #swagger.summary = 'Create rol'

        #swagger.requestBody = {
            required: true,
            schema: { $ref: "#/components/schemas/RolSchema" }
        }
    */
    create(req, res)
})

router.put('/rol/:id', (req, res) => {
    /*
        #swagger.tags = ['Rol']
        #swagger.summary = 'Update rol'

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Rol ID.',
            required: true,
            type: 'integer'
        }

        #swagger.requestBody = {
            required: true,
            schema: { $ref: "#/components/schemas/RolSchema" }
        }
    */
    update(req, res)
})

router.delete('/rol/:id', (req, res) => {
    /*
        #swagger.tags = ['Rol']
        #swagger.summary = 'Delete rol'

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Rol ID.',
            required: true,
            type: 'integer'
        }
    */
    remove(req, res)
})

export default router