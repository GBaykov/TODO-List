import React, { FC } from "react";
import { ItoDoItem } from "../../types/types";
import "./todo-list-item.css";

export default class ToDoListItem extends React.Component<ItoDoItem> {

state = {
  done:false,
  important:false
};

onLabelClick = () => {
  this.setState((state)=>{
    return{
      done: !this.state.done
    }
  })
};
    onMarkImportant = () => {
      this.setState((state)=>{
        return{
          important: !this.state.important
        }
      })
    }

  render(): React.ReactNode {
    const { label }: ItoDoItem = this.props;

    // const style = {
    //   color: important ? "steelblue" : "black",
    //   fontWeight: important ? "bold" : "normal"
    // };
    const {done, important} = this.state

    let className:string = 'todo-list-item';
    if(done) {
      className += ' done'
    }

    if(important) {
      className += ' important'
    }

    return (
      <span className={className} onClick={this.onLabelClick}>
        <span className="todo-list-item-label" >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right">
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
