const Task = require("../models/Task"); //MOngoDB Atas connection

//let tasks = [];  temp DB

const getTasks = async (req, res) => { //gets all tasks and returns an array
    const tasks = await Task.find();
    res.json(tasks);
};

const createTask = async (req, res) => { //req body; create doc; store in atlas
    /*const newTask = {
        id: Date.now(),
        text: "Learn Express",
        completed: false
    };*/

    const newTask = await Task.create({
        text: req.body.text
    });

    //tasks.push(newTask);  Stored in RAM & added to array

    res.status(201).json(newTask);
};

const deleteTask = async (req, res) => {  //url; id; delete matching doc
    /*const taskId = Number(req.params.id);
    tasks = tasks.filter(     //keeps everything except matching task 
        task => task.id !== taskId
    );*/

    await Task.findByIdAndDelete(req.params.id);

    res.json({
        message: "Task deleted"
    });
};

const updateTask = async (req, res) => {

    const task = await Task.findById(req.params.id);
    task.completed = !task.completed;
    await task.save();

    /*const taskId = Number(req.params.id);
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return {
                ...task,   //copies all existing properties
                completed: !task.completed
            };
        }
        return task;
    });*/

    res.json({task});   //message: "Task updated"
};

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    updateTask
};