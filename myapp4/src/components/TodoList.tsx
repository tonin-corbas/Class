import React from "react";
import ToDoItem from "./todoitems";

function ToDoList(){
    const [tasks, setTasks] =React.useState(["Tasca 1", "Tasca 2","Tascaza"]);

    return(
        <div>
            <h1>La meva llista ToDoList</h1>
            <ul>
                {tasks.map((task, index) => (
                    <ToDoItem key={index}content={task}/>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList;