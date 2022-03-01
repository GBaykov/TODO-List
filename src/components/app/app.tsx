import React, { Component, ReactElement, ReactHTMLElement } from "react";
import ReactDOM from "react-dom";
import { ItoDoItem } from "../../types/types";
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import ToDoList from "../todo-list";
import "./app.css";

function App(): JSX.Element {
  const todoData: ItoDoItem[] = [
    { label: "Learn Angular", important: false, id: 1 },
    { label: "Learn Node", important: false, id: 2 },
    { label: "Get Job", important: true, id: 3 }
  ];
// const onDeleted =()=>{
// console.log('deleted')
// }
  return (
    <div className="todo-app">
      <AppHeader toDo="1" done="3" />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todos={todoData} onDeleted={(id)=>console.log('del', id)}/> 
    </div>
  );
}
// onDeleted={(id:string ) => console.log('del', id)}
export default App;
