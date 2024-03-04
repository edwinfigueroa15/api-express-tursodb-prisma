import prisma from '../config/db.js'

export const getAll = async (req, res) => {
    try {
        const response = await prisma.user.findMany()
        return res.status(200).json({ data: response, status: 'success', message: '' })

    } catch (error) {
        return res.json({ data: null, status: 'error', message: error })
    }
}