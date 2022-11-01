const express = require('express')
const { set } = require('mongoose')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deletetGoal } = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deletetGoal).put(protect, updateGoal)

// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deletetGoal)

module.exports = router
