import React, { Component, ReactElement, ReactHTMLElement } from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ToDoList from "./components/todo-list";
import "./styles.css";
import { ItodoData, ItoDoItem } from "./types/types";




function App():JSX.Element{

    const todoData: ItoDoItem[] = [
        {label: "Learn Angular", important: false, id:1},
        {label: "Learn Node", important: false, id:2},
        {label: "Get Job", important: true, id:3}
    ]

    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList todos={todoData}/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))
