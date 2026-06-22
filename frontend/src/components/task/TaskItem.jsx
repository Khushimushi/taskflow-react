//doesn't change state itself, Dashboard does

function TaskItem ({ task, index, handleDeleteTask, markComplete }) { //Receives props from TaskList
    return (
        <li className="border rounded-lg p-4 mb-3 shadow-sm
                       flex justify-between items-center">
            
            <span className={task.completed ? "line-through opacity-70" : ""}>
                {task.text}
            </span>

            <div className="flex gap-2">

                <button type="button" onClick={() => handleDeleteTask(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                </button>

                <button type="button" onClick={() => markComplete(index)}
                   className="bg-green-500 text-white px-3 py-1 rounded">
                   {task.completed ? "Undo" : "Completed"} {/*Conditional Rendering*/}
                </button>

            </div>
        </li>
    );
}

export default TaskItem;