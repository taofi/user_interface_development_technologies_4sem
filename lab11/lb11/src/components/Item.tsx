import React from "react";
import "../css/Item.css";

function Item(props:{name:string, description:string}):JSX.Element{
    return (
        <div className="Item">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}


export default Item;