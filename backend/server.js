require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db"); //imports db

const taskRoutes = require("./routes/taskRoutes");

const app = express(); //backend application

connectDB();

app.use(express.json()); //middleware

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("TaskFlow Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});