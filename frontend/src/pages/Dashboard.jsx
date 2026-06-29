//manages task-related state, comm with backend api using Axios,
//handles CRUD operations, passes data & func to child components through props

import { useState, useEffect } from "react";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
import api from "../services/api"; 
import { useNavigate } from "react-router-dom";

function Dashboard () {

    const [task, setTask] = useState("");   //what's inside input box
    const [tasks, setTasks] = useState([]);  //stores all tasks
    const navigate = useNavigate();

    const fetchTasks = async () => {  //gets all tasks from backend

        try {

            const token = localStorage.getItem("token");
            const response = await api.get("/tasks");

            setTasks(response.data);  //updates state
            console.log("Fetched:", response.data);

        } catch (error) {
            
            console.error(error);
        }
    };

    //mount component->fetch tasks->update state->render tasks
    useEffect(() => {fetchTasks();}, []);  //[] means run once

    const handleAddTask = async (e) => {

        e.preventDefault();  //No refresh

        if (!task.trim()) { //Rejects empty lists & removes spaces
            return;
        }

        try {  
            
            const token = localStorage.getItem("token");

            //req to backend
            await api.post("/tasks", { text: task });

            await fetchTasks();
            setTask("");  //input becomes empty

        } catch (error) {

            console.error(error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {

            const token = localStorage.getItem("token");

            await api.delete(`/tasks/${id}`);
            await fetchTasks();

        } catch (error) {

            console.error(error);
        }
    };

    const markComplete = async (id) => {
        try {

            const token = localStorage.getItem("token");

            await api.put(`/tasks/${id}`);
            await fetchTasks();  //reloads latest data

        } catch (error) {

            console.error(error);
        }
        
    };

    const handleLogout = () => {

        localStorage.removeItem("token");
        navigate("/login");

    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center pt-10">
            <div className="bg-white p-8 rounded-xl shadow-lg w-[600px]">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">
                        Dashboard
                    </h1>
                </div>
                
                {/*Props*/}
                <TaskForm //Handles input and add button
                    task={task}
                    setTask={setTask}
                    handleAddTask={handleAddTask}
                />

                <TaskList //Handles stats, empty state, TaskItem rendering
                tasks={tasks}
                handleDeleteTask={handleDeleteTask}
                markComplete={markComplete}
                />

            </div>
        </div>
    );
}

export default Dashboard;
