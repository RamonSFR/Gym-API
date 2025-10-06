import { Router } from 'express'
import * as controller from '../controllers/workoutController'

const workoutRoutes = Router()

workoutRoutes.get('/workouts', controller.getAllWorkouts)
workoutRoutes.get('/workouts/:id', controller.getWorkoutById)
workoutRoutes.post('/workouts', controller.addNewWorkout)
workoutRoutes.delete('/workouts/:id', controller.removeWorkout)
workoutRoutes.put('/workouts/:id', controller.updateWorkout)

export default workoutRoutes
