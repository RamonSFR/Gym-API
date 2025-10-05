import { Router } from 'express'

import * as controller from '../controllers/employeeController'

const employeeRoutes = Router()

employeeRoutes.get('/employees', controller.getAllEmployees)
employeeRoutes.get('/employees/:id', controller.getEmployeeById)
employeeRoutes.post('/employees', controller.addNewEmployee)
employeeRoutes.delete('/employees/:id', controller.removeEmployee)
employeeRoutes.put('/employees/:id', controller.updateEmployee)

export default employeeRoutes
