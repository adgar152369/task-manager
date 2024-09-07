const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(404).json({ errorMsg: error })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ errorMsg: error });
    }
}

const getSingleTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findById(taskID);
        if (!task) {
            return res.status(404).json({ errorMsg: `No task found with id: ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ errorMsg: error });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
        if (!task) {
            return res.status(404).json({ errorMsg: `No task found with id: ${id}` });
        }
        res.status(200).json({ _id: id, data: req.body });

    } catch (error) {
        res.status(500).json({ errorMsg: error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ errorMsg: `task with id: ${id} cannot be deleted!` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ errorMsg: error });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}