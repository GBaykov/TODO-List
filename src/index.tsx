import React, { Component, ReactElement, ReactHTMLElement } from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ToDoList from "./components/todo-list";
import "./styles.css";



const App:React.FC = () => {
    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))
