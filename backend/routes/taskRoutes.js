//defines api endpoints for task-related operations
//maps req to appropriate controller func but contains no logic

const express = require("express"); //for routes
const router = express.Router(); //mini express app
const protect = require("../middleware/authMiddleware");


//logic in taskController
const {
    getTasks,
    createTask,
    deleteTask,
    updateTask
} = require("../controllers/taskController");

router.get("/", protect, getTasks);  //read
router.post("/", protect, createTask);  
router.delete("/:id", protect, deleteTask);
router.put("/:id", protect, updateTask);

module.exports = router;  //makes router available elsewhere
