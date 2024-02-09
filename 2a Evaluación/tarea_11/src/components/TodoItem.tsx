import React from "react";

type Todo = {
    id: number;
    task: string;
    isCompleted: boolean;
};

function ToDoItem({ todo, handleDelete, handleChangeChecked }: { todo: Todo, handleDelete: (id: number) => void, handleChangeChecked: (todo: Todo) => void }) {
    return (
        <div className="">
            <div style={{
                textDecoration: todo.isCompleted ? "line-through" : ""
            }}>{todo.task}
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => handleChangeChecked(todo)}
                />
                <button onClick={() => handleDelete(todo.id)}>Borrar</button>
            </div>
        </div>
    )
}
export default ToDoItem;