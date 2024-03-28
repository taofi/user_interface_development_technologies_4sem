import React, {useState} from "react"
import Button from './Button'

function Counter(props:{maxCounter:number}):JSX.Element{
    const [count, setCount] = useState(0);
    const counterStyle:{color:string} = {
        color:count === props.maxCounter ? 'red' : 'white', // Изменение цвета текста
    };

    return(
        <div className="Counter">
            <h2 style={counterStyle}>{count}</h2>
            <div className="containerButton">
                <Button title = "inc" fun = {() => setCount(count + 1)} disabled={count >= props.maxCounter}/>
                <Button title = "reset" fun = {() => setCount(0) } disabled={count === 0}/>
            </div>
        </div>
    )


}

export default Counter