import React from "react";
import "../Css/Header.css";
import Button from "./Button";
import {Outlet, useNavigate} from 'react-router-dom';
function Header():JSX.Element{

    return(
        <>
            <header>
                <div>
                    <Button title="movies" src="/movies" />
                    <Button title="cartoon" src="/cartoon"/>
                    <Button title="series" src="/series"/>
                    <Button title="search" src="/search"/>
                </div>
            </header>
            <Outlet/>
        </>

    )
}

export default Header;