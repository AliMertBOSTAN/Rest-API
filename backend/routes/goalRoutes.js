const express = require('express')
const router = express.Router()
const { getGoals, createGoals, editGoals, deleteGoals } = require('../controllers/goalController')

router.route('/').get(getGoals).post(createGoals)
router.route('/:id').put(editGoals).delete(deleteGoals)

module.exports = router