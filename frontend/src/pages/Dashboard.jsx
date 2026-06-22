import { useState } from "react";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";

function Dashboard () {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]); //DB for task (for now)

    const handleAddTask = (e) => {
        e.preventDefault();  //No refresh

        console.log("Button Clicked");
        console.log(task);

        if (!task.trim()) { //Rejects empty lists
            return;
        }

        setTasks([ //Adds new task
            ...tasks,
            {
                id: Date.now(),
                text: task,
                completed: false,
                createdAt: new Date()
            }
        ]);

        setTask("");
        console.log("task value", task);
        

    };

    const handleDeleteTask = (index) => {
            setTasks(
                tasks.filter(
                    (task, taskIndex) =>
                        taskIndex !== index
                )
            );
    };

    const markComplete = (index) => {
        setTasks(

            tasks.map(  //map creates new array for completed tasks
                (task, taskIndex) => {
                    if (taskIndex === index) {
                        return {
                           ...task,
                           completed: !task.completed
                       };
                    }
                return task;
            })
        );
    }

    console.log(task);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center pt-10">
            <div className="bg-white p-8 rounded-xl shadow-lg w-[600px]">
               <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

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
