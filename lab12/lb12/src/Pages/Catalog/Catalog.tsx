import React from "react";
import { Film } from "../../Scripts/Base";
import Card from "../../Components/Card";
import "../../Css/Catalog.css";

function Catalog(props:{type:string, films:Film[]}):JSX.Element{
    return (
        <>
            <div>{props.type}</div>
            <div className="catalog">
                {props.films.map((film)=><Card key={film.id} film = {film}/>)}
            </div>
        </>
    )
}

export default Catalog;