import React, { FC } from "react";
import { ItodoData, ItoDoItem } from "../types/types";
import ToDoListItem from "./todo-list-item";

//const itemsArr = ['learn React', 'make portfolio', 'bigin to earn money']
function  ToDoList(props:ItodoData):JSX.Element{
    const {todos} = props;
    const elements = todos.map((item)=> {
        const {id, ...itemProps} = item;
        return (
            // <li><ToDoListItem label={item.label} important={item.important}/></li> =======!! SPRED operator
            <li key={id}><ToDoListItem {...itemProps}/></li> 
        )
    })


    return (
    <ul>
        {elements}
{/* <li><ToDoListItem label={""} important/></li>
<li><ToDoListItem/></li> */}
    </ul>
    )
};

export default ToDoList;