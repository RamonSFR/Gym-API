import { Router } from 'express'
import * as controller from '../controllers/memberController'

const membersRoutes = Router()

membersRoutes.get('/members', controller.getAllMembers)
membersRoutes.get('/members/:id', controller.getMemberById)
membersRoutes.post('/members', controller.addNewMember)
membersRoutes.delete('/members/:id', controller.removeMember)
membersRoutes.put('/members/:id', controller.updateMember)

export default membersRoutes
