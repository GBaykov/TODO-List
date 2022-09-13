import React, { Component } from "react";
import { IAddItem } from "../../types/types";
import './add-item.css';


export default class AddItem extends Component<IAddItem>{
    state = {
        label:''
    }
  
    onLabelchange = (e:React.FormEvent<HTMLInputElement>) => {
        this.setState({
            label:e.currentTarget.value
        })
    }
    onSubmit = (e:React.FormEvent)=> {
e.preventDefault();
this.props.onAddItem(this.state.label);
this.setState({
    label:''
})
    }
    
render():React.ReactNode{
    const { onAddItem }: IAddItem = this.props
    return(    
    <form className="item-add-form d-flex"
    onSubmit={this.onSubmit}>
    <input type="text" 
    className="form-control"
    onChange={this.onLabelchange}
    placeholder="What needs to be done?"
    value={this.state.label}/>

    <button className="btn btn-outline-secondary"
    >ADD Item</button>
</form>)
}
}