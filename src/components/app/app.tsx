import React, { Component, ReactElement, ReactHTMLElement } from "react";
import ReactDOM from "react-dom";
import { ItoDoItem } from "../../types/types";
import AddItem from "../add-item/add-item";
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import ToDoList from "../todo-list";
import "./app.css";

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: "Learn Angular", important: false, id: 1 },
      { label: "Learn Node", important: false, id: 2 },
      { label: "Get Job", important: true, id: 3 }
    ] as ItoDoItem[]
  }

  deleteElement = (id:number | undefined) => {
this.setState((state)=> {
  
  let index = this.state.todoData.findIndex((el)=> el.id === id );
  console.log(index)
  const before = this.state.todoData.slice(0, index);
  const after = this.state.todoData.slice(index + 1);
  const newArr = [...before, ...after]
  return {
    todoData:newArr
  }
})
  }

  onAddItem = (text:any) => {
this.setState((state)=> {
  const newItem:ItoDoItem =  { label: text, important: true, id: this.maxId++ }
 
   const newArr = [...this.state.todoData, newItem]
  return {
    todoData: newArr
  }
})
  }

  render(): React.ReactNode {
    const todoData: ItoDoItem[] = [
      { label: "Learn Angular", important: false, id: 1 },
      { label: "Learn Node", important: false, id: 2 },
      { label: "Get Job", important: true, id: 3 }
    ];
 
    return (
      <div className="todo-app">
        <AppHeader toDo="1" done="3" />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList todos={this.state.todoData} onDeleted={this.deleteElement}/> 
        <AddItem onAddItem={this.onAddItem}/>
      </div>
    );
  }
}

// export default App;
