import React, { Component } from "react";
import { IFilter } from "../../types/types";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component<IFilter> {
  
  onBtnclick = (e:React.FormEvent) => {
console.log(e.target)
  }

  render(): React.ReactNode {
    const {filter}:IFilter = this.props;

    
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info"
        name='All'
        onClick={this.onBtnclick}>
          All
        </button>
        <button type="button" className="btn btn-outline-secondary"
        name='Active'
        onClick={this.onBtnclick}>
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary"
        onClick={this.onBtnclick}
        name='Done'>
          Done
        </button>
      </div>
    );
  }
}


