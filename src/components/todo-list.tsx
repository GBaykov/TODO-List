import React, { FC } from "react";
import ToDoListItem from "./todo-list-item";

//const itemsArr = ['learn React', 'make portfolio', 'bigin to earn money']
function  ToDoList():JSX.Element{
    return (
    <ul>
<li><ToDoListItem label={""} important/></li>
<li><ToDoListItem/></li>
    </ul>
    )
};

export default ToDoList;