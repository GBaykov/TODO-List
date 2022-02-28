import React, { Component, ReactElement, ReactHTMLElement } from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header/app-header";
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";
import SearchPanel from "./components/search-panel/search-panel";
import ToDoList from "./components/todo-list/todo-list";
import "./styles.css";
import { ItodoData, ItoDoItem } from "./types/types";




function App():JSX.Element{

    const todoData: ItoDoItem[] = [
        {label: "Learn Angular", important: false, id:1},
        {label: "Learn Node", important: false, id:2},
        {label: "Get Job", important: true, id:3}
    ]

    return(
        <div className="todo-app">
            <AppHeader toDo="1" done="3"/>
            <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
            <ToDoList todos={todoData}/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))
