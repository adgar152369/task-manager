const express = require('express');
const { getAllTasks, getSingleTask, createTask, deleteTask, updateTask } = require('../controllers/tasks');
const router = express.Router();

router.route('/').get(getAllTasks);
router.route('/').post(createTask);
router.route('/:id').get(getSingleTask);
router.route('/:id').put(updateTask);
router.route('/:id').delete(deleteTask);

module.exports = router;