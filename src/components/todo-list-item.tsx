import React, { FC } from "react";
import { ItoDoItem } from "../types/types";





function ToDoListItem({label, important}:ItoDoItem):JSX.Element {

    const style = {
        color: important ? "tomato" : "black"
    } 

    return <span style={style}>{label}</span>
};

export default ToDoListItem;