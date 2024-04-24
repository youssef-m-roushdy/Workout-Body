const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

//GET all workouts
router.get('/', getWorkouts)

//GET singl workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports = router