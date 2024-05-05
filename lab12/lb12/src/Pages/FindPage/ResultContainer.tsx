import React from "react";
import Card from "../../Components/Card";
import { Film } from "../../Scripts/Base";


function ResultContainer(props:{films:Film[]}):JSX.Element{
    return (
        <div className="resultContainer">
            {props.films.map((film)=><Card key={film.id} film = {film}/>)}
        </div>
    )
}


export default ResultContainer;