import React, { Component } from "react";
import { ISearchPanel } from "../../types/types";
import "./search-panel.css";

export default class SearchPanel extends Component<ISearchPanel>{
  state = {
    term:""
  }


  onSearchchange = (e:React.FormEvent<HTMLInputElement>) => {
const term = e.currentTarget.value;
this.setState({
  term:term
})
this.props.onSearchchange(term)
  }

  render(): React.ReactNode {
    const {term}:ISearchPanel = this.props
      return(
<input placeholder="searchbar" 
value={term}
onChange={this.onSearchchange}
/>
      )
  }
}
