import React from "react";
import "../../Css/Main.css"
import series from "../../img/navigate/series.jpg"
import cartoon from "../../img/navigate/cartoons.avif"
import movies from "../../img/navigate/movies.avif"
import NavigateCard from "./NavigateCard";
import {useNavigate} from "react-router-dom";

function Main():JSX.Element{

    const navigate = useNavigate();
    return (
        <main>
            <NavigateCard fun={() => navigate('movies', {replace: false})} title="movies" imgSrc={movies}/>
            <NavigateCard fun={() => navigate('cartoon', {replace: false})} title="cartoons" imgSrc={cartoon}/>
            <NavigateCard fun={() => navigate('series', {replace: false})} title="series" imgSrc={series}/>
        </main>

    )
}

export default Main;