const express = require("express"); //for servers & APIs
const router = express.Router(); //acts like mini express app for routes

const {
    getTasks,
    createTask,
    deleteTask,
    updateTask
} = require("../controllers/taskController");

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

/*let tasks = [];  //temp DB
router.get("/", (req, res) => { //get gives data
    const newTask = {
        id: Date.now(),
        text: "Learn Express",
        completed: false
    };
    tasks.push(newTask);
    res.json(tasks); //js to json
    console.log("GET /api/tasks hit");
    res.json(tasks);
        {message: "Task route working"}
});
router.post("/", (req, res) => { //creates new data
    console.log("POST HIT");
    console.log(req.body);
    const newTask = {
        id: Date.now(),
        text: req.body.text,
        completed: false
    };
    tasks.push(newTask);
    console.log(tasks);
    res.status(201).json(newTask);  //201: created successfully
});
router.delete("/:id", (req, res) => {  //removes data
    const taskId = Number(req.params.id);  //params returns string not number
    tasks = tasks.filter(                  //keeps everything except matching task 
        task => task.id !== taskId
    );
    res.json({
        message: "Task deleted"
    });
});
router.put("/:id", (req, res) => {  //updates existing data
    const taskId = Number(req.params.id);
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return {
                ...task,   //copies all existing properties
                completed: !task.completed
            };
        }
        return task;
    });
    res.json({
        message: "Task updated"
    });
});*/

module.exports = router;  //makes router available elsewhere