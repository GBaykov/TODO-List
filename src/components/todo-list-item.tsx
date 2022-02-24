import React, { FC } from "react";


  export interface ItoDoItem {
    label?: string;
    important?:boolean
  }


function ToDoListItem({label, important}:ItoDoItem):JSX.Element {

    const style = {
        color: important ? "tomato" : "black"
    } 

    return <span style={style}>Learn React and Node js</span>
};

export default ToDoListItem;