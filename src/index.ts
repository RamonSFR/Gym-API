import express from 'express'
import { Express } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger/swagger'

import employeeRoutes from './routes/employeeRoutes'
import membersRoutes from './routes/membersRoutes'
import workoutRoutes from './routes/workoutsRoutes'

const app: Express = express()
const port: number = 3000

app.use(express.json())

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Gym API Documentation'
  })
)

app.use(employeeRoutes)
app.use(membersRoutes)
app.use(workoutRoutes)

app.listen(port, () => {
  console.log(`API running at: http://localhost:${port}`)
  console.log(
    `Swagger documentation available at: http://localhost:${port}/api-docs`
  )
})
