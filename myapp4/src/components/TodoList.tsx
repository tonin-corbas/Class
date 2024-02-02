import React from "react";
import ToDoItem from "./TodoItem";
import { Button } from "react-bootstrap";

function ToDoList(){
    const [tasks, setTasks] =React.useState(["Tasca 1", "Tasca 2"]);

    function addTask(texto: string){
        setTasks(currentTasks => [...currentTasks, texto])
    }
    return(
        <div>
            <h1>La meva llista ToDoList</h1>
            <ul>
                {tasks.map((task, index) => (
                    <ToDoItem key={index}content={task}/>
                ))}
            </ul>
            <Button variant="success" onClick={() => addTask("Nueva Tarea")}>Añadir Tarea</Button>
        </div>
    )
}
export default ToDoList;