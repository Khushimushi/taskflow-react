//manages task-related state, comm with backend api using Axios,
//handles CRUD operations, passes data & func to child components through props

import { useState, useEffect } from "react";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

function Dashboard () {

    const [task, setTask] = useState("");   //what's inside input box
    const [tasks, setTasks] = useState([]);  //stores all tasks
    const navigate = useNavigate();

    const fetchTasks = async () => {  //gets all tasks from backend

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get( 
                "http://localhost:5000/api/tasks",  //to express
                 {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

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
            await axios.post("http://localhost:5000/api/tasks", {
               text: task
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

        );

            await fetchTasks();
            setTask("");  //input becomes empty

        } catch (error) {

            console.error(error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:5000/api/tasks/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            await fetchTasks();

        } catch (error) {

            console.error(error);
        }
    };

    const markComplete = async (id) => {
        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `http://localhost:5000/api/tasks/${id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );
            
            await fetchTasks();  //reloads latest data

        } catch (error) {

            console.error(error);

        }

        
    };

    const handleLogout = () => {

        localStorage.removeItem("token");
        navigate("/login");

    };

    console.log(task);
    console.log(tasks);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center pt-10">
            <div className="bg-white p-8 rounded-xl shadow-lg w-[600px]">
               <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                
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

                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>

            </div>
        </div>
    );
}

export default Dashboard;
