//defines api endpoints for task-related operations
//maps req to appropriate controller func but contains no logic

const express = require("express"); //for routes
const router = express.Router(); //mini express app


//logic in taskController
const {
    getTasks,
    createTask,
    deleteTask,
    updateTask
} = require("../controllers/taskController");

router.get("/", getTasks);  //read
router.post("/", createTask);  
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;  //makes router available elsewhere
