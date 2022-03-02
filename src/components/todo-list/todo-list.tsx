import React, { FC } from "react";
import { ItodoData, ItoDoItem } from "../../types/types";
import ToDoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

// const itemsArr = ['learn React', 'make portfolio', 'bigin to earn money']
function ToDoList(props: ItodoData): JSX.Element {
  const { todos, onDeleted, onToggleImportant, onToggleDone } = props;
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      // <li><ToDoListItem label={item.label} important={item.important}/></li> =======!! SPRED operator
      <li className="list-group-item" key={id}>
        <ToDoListItem {...itemProps} 
        onDeleted={()=> onDeleted(id)}
        onToggleImportant={()=>onToggleImportant(id)}
        onToggleDone={()=>onToggleDone(id)}/>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {elements}
      {/* <li><ToDoListItem label={""} important/></li>
<li><ToDoListItem/></li> */}
    </ul>
  );
}

export default ToDoList;
