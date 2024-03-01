import prisma from '../config/db.js'

export const getAll = async (req, res) => {
    try {
        const response = await prisma.rol.findMany()
        return res.status(200).json({ data: response, status: 'success', message: '' })

    } catch (error) {
        return res.json({ data: null, status: 'error', message: error })
    }
}

export const getById = async (req, res) => {
    try {
        const response = await prisma.rol.findFirst({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!response) return res.status(404).json({ data: null, status: 'error', message: 'not_found' })
        return res.status(200).json({ data: response, status: 'success', message: '' })

    } catch (error) {
        return res.json({ data: null, status: 'error', message: error })
    }
}

export const create = async (req, res) => {
    try {
        const response = await prisma.rol.create({
            data: req.body
        })
        return res.status(200).json({ data: response, status: 'success', message: '' })

    } catch (error) {
        return res.json({ data: null, status: 'error', message: error })
    }
}

export const update = async (req, res) => {
    try {
        const response = await prisma.rol.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        return res.status(200).json({ data: response, status: 'success', message: '' })

    } catch (error) {
        return res.json({ data: null, status: 'error', message: error })
    }
}

export const remove = async (req, res) => {
    try {
        const response = await prisma.rol.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!response) return res.status(404).json({ data: null, status: 'error', message: 'not_found' })
        return res.status(200).json({ data: response, status: 'success', message: '' })

    } catch (error) {
        return res.json({ data: null, status: 'error', message: error })
    }
}