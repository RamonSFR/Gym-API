import { Router } from 'express'

const membersRoutes = Router()

membersRoutes.get('/members')
membersRoutes.get('/members/:id')
membersRoutes.post('/members')
membersRoutes.delete('/members/:id')
membersRoutes.put('/members/:id')

export default membersRoutes
