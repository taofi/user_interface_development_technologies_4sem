import React from "react";
import "../Css/Button.css"
import {Link} from "react-router-dom";

function Button(props:{title:string, src:string}):JSX.Element{
    return(
        <Link className="button" to={props.src}>{props.title}</Link>
    )
}

export default Button;