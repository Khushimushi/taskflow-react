//controls CRUD of tasks

const Task = require("../models/Task"); //MongoDB Atas connection

//gets all tasks from DB; returns an array
const getTasks = async (req, res) => { 
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);  //sends tasks back to Backend
};

//creates new task doc in DB
const createTask = async (req, res) => {
   
    const newTask = await Task.create({
        text: req.body.text,   //contains _id, text, completed
        user: req.user.id
    });

    res.status(201).json(newTask);  //returns created task
};

//delete a task by searching it's id
const deleteTask = async (req, res) => { 

    await Task.findOneAndDelete({
        _id: req.params.id,   //req.params.id gives id
        user: req.user.id
    });  

    if (!Task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json({
        message: "Task deleted"
    });
};

//toggle completed status
const updateTask = async (req, res) => {

    const task = await Task.findOne({
        _id: req.params.id,
        user: req.user.id
    });

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.completed = !task.completed;

    await task.save();  //memory & db changed

    res.json({task});   //returns updated doc
};

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    updateTask
};
