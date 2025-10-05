import { Router } from 'express'

const router = Router()

router.get('/employees')
router.get('/employees/:{id}')
router.post('/employees')
router.delete('/eployees/:{id}')
router.put('employees/:{id}')

export default router
