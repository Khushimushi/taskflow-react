function TaskForm({ task, setTask, handleAddTask }) { //Props from Dashboard
    return (
        <form onSubmit={handleAddTask}>
            <div className="flex gap-2 mb-6">
                <input type="text" value={task}
                 onChange={(e) => setTask(e.target.value)}
                 placeholder="Add a new task..."
                 className="flex-1 border rounded-md p-3"
                />

                <button type="submit"
                 className="bg-blue-600 text-white px-4 rounded-md">
                    Add Task
                 </button>
            </div>
        </form>
    )
};

export default TaskForm;
