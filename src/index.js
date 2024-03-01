import express from 'express'
import dotenv from 'dotenv'
import logger from 'morgan'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './config/swagger.json' assert { type: "json" }

import router from './routes/index.js'

dotenv.config()
const PORT = process.env.PORT ?? 3000

const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", router.rol)
app.use("/api", router.user)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})