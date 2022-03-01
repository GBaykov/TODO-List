import React from "react";
import { IAddItem } from "../../types/types";
import './add-item.css'
function AddItem({onAddItem}:IAddItem):JSX.Element{
return(
    <div className="item-add-form">
        <button className="btn btn-outline-secondary"
        onClick={()=>onAddItem('erew')}
        >ADD Item</button>
    </div>
    
)
}

export default AddItem