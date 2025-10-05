import { Router } from 'express'
import { Workout } from '../generated/prisma'

const workoutRoutes = Router()

workoutRoutes.get('/workouts')
workoutRoutes.get('/workouts/:id')
workoutRoutes.post('/workouts')
workoutRoutes.delete('/workouts/:id')
workoutRoutes.put('/workouts/:id')

export default workoutRoutes
