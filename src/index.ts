import express from 'express'
import { Express } from 'express'

import employeeRoutes from './routes/employeeRoutes'
import membersRoutes from './routes/membersRoutes'

const app: Express = express()
const port: number = 3000

app.use(express.json())
app.use(employeeRoutes)
app.use(membersRoutes)

app.listen(port, () => {
    console.log(`API running at: http://localhost:${port}'`)
})
