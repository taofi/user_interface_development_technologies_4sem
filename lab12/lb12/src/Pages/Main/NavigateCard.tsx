import React from "react";

function NavigateCard(props:{imgSrc:string, title:string, fun?:()=>void}):JSX.Element{
    return(
        <div className="NavigateCard">
            <figure onClick={props.fun}>
                <img src={props.imgSrc} alt={props.title}/>
                <figcaption>{props.title}</figcaption>
            </figure>
        </div>
    )
}

export default NavigateCard;