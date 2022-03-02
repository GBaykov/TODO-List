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
      this.createItem("Learn Angular"),
      this.createItem("Learn Node"),
      this.createItem("Get Job")
    ] as ItoDoItem[],
    term:'',
    filter:'active'
  }

  createItem(label:string | undefined){
    return {
       label: label, important: false,done:false, id: this.maxId++ 
    }
  }

  deleteElement = (id:number | undefined) => {
this.setState((state)=> {
  const {todoData} = this.state;
  let index = todoData.findIndex((el)=> el.id === id );
  console.log(index)
  const before = todoData.slice(0, index);
  const after = todoData.slice(index + 1);
  const newArr = [...before, ...after]
  return {
    todoData:newArr
  }
})
  }

  onAddItem = (text:string | undefined) => {
this.setState((state)=> {
  const newItem:ItoDoItem =  this.createItem(text)
   const newArr = [...this.state.todoData, newItem]
  return {
    todoData: newArr
  }
})
  }

// toggleProperty(arr:ItoDoItem[], id:number, propName:any){

//   let index = arr.findIndex((el)=> el.id === id );
//   const oldItem = arr[index];
//   const newItem = {...oldItem, [propName]: !oldItem[propName]}
//   const before = arr.slice(0, index);
//   const after = arr.slice(index + 1);
//   const newArr = [...before,newItem, ...after];
//   return{
//     todoData:newArr
//   }
// }

  onToggleDone = (id:number | undefined) => {
    this.setState((state)=>{
      const {todoData} = this.state;
      let index = todoData.findIndex((el)=> el.id === id );
      const oldItem = todoData[index];
      const newItem = {...oldItem, done: !oldItem.done}
      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);
      const newArr = [...before,newItem, ...after];
      return{
        todoData:newArr
      }
    })
  }

  onToggleImportant = (id:number | undefined) => {
    this.setState((state)=>{
      const {todoData} = this.state;
      let index = todoData.findIndex((el)=> el.id === id );
      const oldItem = todoData[index];
      const newItem = {...oldItem, important: !oldItem.important}
      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);
      const newArr = [...before,newItem, ...after];
      return{
        todoData:newArr
      }
    })
  }

  search(arr:ItoDoItem[], term:string){
    if(term.length === 0) return arr;
  return arr.filter((el)=>{
    if(el.label) {
      return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    }
    
  })
  }
  onSearchchange = (term:string) => {
this.setState({
  term:term
})
  }
  onFilterchchange= (filter:string) => {
this.setState({filter})
}

  filterFunc(arr:ItoDoItem[], filter:string){
switch(filter){
 case 'all':
   return arr;
 case 'active':
   return arr.filter((el)=>!el.done);
   case 'done':
   return arr.filter((el)=>el.done);
   default: 
   return arr;
}
  }

  render(): React.ReactNode {
    const {todoData, filter, term} = this.state;
 const doneCount = todoData.filter((el)=>el.done).length;
 const todoCount = todoData.length - doneCount;
 const visibleItems = this.filterFunc(this.search(todoData, term), filter) 
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel term={term} onSearchchange={this.onSearchchange}/>
          <ItemStatusFilter filter={filter} onFilterchchange={this.onFilterchchange}/>
        </div>
        <ToDoList todos={visibleItems} 
        onDeleted={this.deleteElement}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}/> 
        <AddItem onAddItem={this.onAddItem}/>
      </div>
    );
  }
}

// export default App;
