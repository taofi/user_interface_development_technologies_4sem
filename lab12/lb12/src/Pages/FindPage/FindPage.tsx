import React, {useState} from 'react';
import searchIcon from "../../img/search_Icon.svg";
import ResultContainer from "./ResultContainer";
import {FindFilm} from "../../Scripts/FetchApi";
import "../../Css/FindPage.css"
import RadioButton from "../../Components/RadioButton";


function FindPage() {
    const [searchResult, setResult] = useState<any[]>([]);
    const [inputText, setInputText] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<string>("all");
    const Find = async(sv?:string)=>{
        let arr:any;
        if(inputText !== undefined)
        {
            if(sv)
                arr = await FindFilm(inputText, sv);
            else
                arr = await FindFilm(inputText, selectedValue);
        }
        if(arr === undefined)
            arr = [];
        setResult(arr);
    }
    const handleKeyDown = (event:any):void => {
        // console.log(event.key);
        if (event.key === 'Enter') {
            Find();
        }
    };
    const handleChange = (event:any) => {
        setSelectedValue(event.target.value);
        Find(event.target.value);
    };
    return (
        <div>
            <div className="findContainer">
                <input value={inputText} onKeyDown={handleKeyDown} onChange={(e: any) => setInputText(e.target.value)}/>
                <img onClick={()=>Find()} src={searchIcon} alt=""/>
                <RadioButton selectedValue={selectedValue} handleChange={handleChange}/>
            </div>
            <ResultContainer films={searchResult}/>
        </div>
    );
}

export default FindPage;