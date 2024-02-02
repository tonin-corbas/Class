import React from "react";
import { Button } from "react-bootstrap";

function ToDoItem({content}: {content: String }){
    return(
        <div className="">
            <li>{content}</li>
        </div>
    )
}
export  default ToDoItem;