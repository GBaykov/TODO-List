import React, { FC } from "react";
import { ItoDoItem } from "../../types/types";
import "./todo-list-item.css";



export default class ToDoListItem extends React.Component<ItoDoItem> {

state = {
  done:false,
  important:false
};



  render(): React.ReactNode {
    const { label, onDeleted, onToggleDone, onToggleImportant, done, important }: ItoDoItem = this.props;

    //const {} = this.state

    let className:string = 'todo-list-item';
    if(done) {
      className += ' done'
    }

    if(important) {
      className += ' important'
    }

    return (
      <span className={className} >
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

// function ToDoListItem({label, important}:ItoDoItem):JSX.Element {

//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//       };

//       return (
//         <span className="todo-list-item">
//           <span
//             className="todo-list-item-label"
//             style={style}>
//             {label}
//           </span>

//           <button type="button"
//                   className="btn btn-outline-success btn-sm float-right">
//             <i className="fa fa-exclamation" />
//           </button>

//           <button type="button"
//                   className="btn btn-outline-danger btn-sm float-right">
//             <i className="fa fa-trash-o" />
//           </button>
//         </span>
//       );
//     };
