import React from "react";
import Todoitem from "./Todoitem";

function ToDoList() {
    const [tasks, setTasks] = React.useState(["Tasca 1", "Tasca 2"]);

    return (
        <div>
            <h1>Mi lista To Do List</h1>
            <ul>{tasks.map((task, index) => (
                <Todoitem key={index} content={task} />
            ))}
            </ul>
        </div>
    )
}

export default ToDoList