import React from "react";
import "../css/Header.css";


function Header(props:{children: React.ReactNode}):JSX.Element{
    return (
        <header>
            <div className="Container" >{props.children} </div>
        </header>
    )
}


export default Header;