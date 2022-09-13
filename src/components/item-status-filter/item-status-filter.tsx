import React, { Component } from "react";
import { IFilter } from "../../types/types";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component<IFilter> {

  buttons = [
    {name:'all', label:'All' },
    {name:'active', label:'Active' },
    {name:'done', label:'Done' }
  ]
  
  onBtnclick = (e:React.FormEvent) => {
console.log(e.target)
  }

  render(): React.ReactNode {

    const {filter, onFilterchchange}:IFilter = this.props;

const buttons = this.buttons.map(({name, label})=>{
  const isActive = filter === name;
  const clazz = isActive? 'btn-info' : 'btn-outline-secondary'
 return(
  <button type="button" className={`btn ${clazz}`}
  key={name}
  onClick={()=>onFilterchchange(name)}>
    {label}
  </button>
 )
})
    
    return (
      <div className="btn-group">
       {buttons}
      </div>
    );
  }
}


