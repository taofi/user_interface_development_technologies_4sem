import React, {useState} from 'react';
import "./css/App.css"
import Header from "./components/Header";
import ResultContainer from "./components/ResultContainer";
import ItemClass from "./scripts/ItemClass";
import ItemList from "./scripts/state"
import search from "./scripts/search";
import searchIcon from "./img/search_Icon.svg";
import itemClass from "./scripts/ItemClass";

const AllItems:ItemClass[] = ItemList.list;
function App() {
    const [searchResult, setResult] = useState<ItemClass[]>(AllItems);
    const [inputText, setInputText] = useState<string>('');
    const Find = ():void=>{
        let arr:itemClass[] =[]
        if(inputText !== undefined)
            arr = search(AllItems, inputText)
        else
            arr = AllItems;
        setResult(arr);
    }
    const handleKeyDown = (event:any):void => {
       // console.log(event.key);
        if (event.key === 'Enter') {
            Find();
        }
    };
    return (
        <div className="App">
            <Header>
                <input value={inputText} onKeyDown={handleKeyDown} onChange={(e:any)=>setInputText(e.target.value)}/>
                <img onClick={Find} src={searchIcon} alt=""/>
            </Header>
            <ResultContainer List={searchResult}/>
        </div>
    );
}

export default App;
