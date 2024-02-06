import React, { useState } from "react";
import ToDoItem from "./TodoItem";
import { Button } from "react-bootstrap";

type Todo = {
    id: number;
    task: string;
    isCompleted: boolean;
};

function ToDoList() {

    const [todos, setTodos] = useState<Todo[]>([]);

    const [task, setTask] = useState<string>("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();


        if (task.trim().length === 0) {
            alert("Please enter a value!");
            return;
        }

        const todo: Todo = {
            id: Date.now(),
            task: task,
            isCompleted: false,
        };

        setTodos([todo, ...todos]);

        setTask("");
    };

    const handleChangeChecked = (todo: Todo) => {
        const index = todos.indexOf(todo);

        todo.isCompleted = !todo.isCompleted;

        todos.splice(index, 1, todo);

        setTodos([...todos]);
    };

    const handleDelete = (id: number) => {
        const index = todos.findIndex((todo) => todo.id === id);

        todos.splice(index, 1);

        setTodos([...todos]);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="task" value={task} onChange={handleInput} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => handleChangeChecked(todo)}
                        />
                        <button onClick={() => handleDelete(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
