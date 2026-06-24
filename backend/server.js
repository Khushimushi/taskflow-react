//configs and starts the backend application

const cors = require("cors");  //allows comm between front and back-end
require("dotenv").config();  //loads variables from .env into process.env

const express = require("express");  //server, routes, middleware. apis
const connectDB = require("./config/db"); //imports db connection

const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express(); //backend application

connectDB();  //connects to db

app.use(cors());  //enables cross-origin req otherwise axios err and cors b/ocked

//converts incoming json to js obj otherwise undefined
app.use(express.json()); //middleware 

app.use("/api/tasks", taskRoutes);  //all task routes start with "path"
app.use("/api/auth", authRoutes);  //all auth routes start with "path"

//verify backend working or not
app.get("/", (req, res) => {
    res.send("TaskFlow Backend Running");
});

const PORT = process.env.PORT || 5000;

//attends incoming req
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
