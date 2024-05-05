import React from "react";
import "../css/ResultContainer.css";
import Item from "./Item";
import ItemClass from "../scripts/ItemClass";

function ResultContainer(props:{List:ItemClass[]}):JSX.Element{
    return (
        <main>
            {props.List.map((item:ItemClass)=><Item key={item.id} name={item.name} description={item.description}/>)}
        </main>
    )
}


export default ResultContainer;