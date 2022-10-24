const express = require('express')
const { set } = require('mongoose')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deletetGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deletetGoal).put(updateGoal)

// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deletetGoal)

module.exports = router
