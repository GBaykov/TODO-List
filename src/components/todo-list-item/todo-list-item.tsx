import React, { FC } from "react";
import { ItoDoItem } from "../../types/types";
import './todo-list-item.css'





function ToDoListItem({label, important}:ItoDoItem):JSX.Element {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
      };
    
      return (
        <span className="todo-list-item">
          <span
            className="todo-list-item-label"
            style={style}>
            {label}
          </span>
    
          <button type="button"
                  className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation" />
          </button>
    
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
        </span>
      );
    };
    
    export default ToDoListItem;
    