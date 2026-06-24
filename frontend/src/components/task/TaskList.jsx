import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDeleteTask, markComplete }) {
    
    const completedTasks = tasks.filter(
        task => task.completed //completed: true
    );

    const pendingTasks = tasks.filter(
        task => !task.completed //completed: false
    );
    
    return (
        <div>
        <div className="flex gap-4 mb-6">

            <div className="bg-gray-100 p-4 rounded-lg flex-1 text-center">
               <p>Total</p> 
               <p className="text-xl font-bold">
                   {tasks.length}
                </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg flex-1 text-center">
               <p>Completed</p>
               <p className="text-xl font-bold">
                   {completedTasks.length}
                </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg flex-1 text-center">
               <p>Pending</p>
               <p className="text-xl font-bold">
                   {pendingTasks.length}
                </p>
            </div>

        </div>

        <div className="text-center text-gray-500 py-10">
            {tasks.length === 0 && (
                <div>
                    <p className="text-4xl mb-2">
                       📝
                    </p>
                    <p className="font-medium">
                        No tasks yet.
                    </p>
                    <p>Add your first task.</p>
                </div>
            )}
        </div>

        <ul> 
            {/*Render Tasks*/}
            {tasks.map((task, index) => (
                <TaskItem             //One TaskItem per task
                    key={task._id}   //React uses keys to track items (internally)
                    task={task}
                    index={index}   //for my code
                    handleDeleteTask={handleDeleteTask}
                    markComplete={markComplete}
                />
            ))}
        </ul>
        </div>
    );
}

export default TaskList;