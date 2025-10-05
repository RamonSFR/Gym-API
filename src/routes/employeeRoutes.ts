import { Router } from 'express'

const employeeRoutes = Router()

employeeRoutes.get('/employees')
employeeRoutes.get('/employees/:{id}')
employeeRoutes.post('/employees')
employeeRoutes.delete('/eployees/:{id}')
employeeRoutes.put('/employees/:{id}')

export default employeeRoutes
