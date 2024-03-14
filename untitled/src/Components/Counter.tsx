import React from "react";
import Button from './Button'

class Counter extends React.Component {
    public state:{counter:number}
    constructor(public props:{maxCounter:number}) {
        super(props);
        this.state ={
            counter: 0
        }
        this.increase = this.increase.bind(this);
        this.reset = this.reset.bind(this);
    }

    render():JSX.Element {
        const counterStyle:{color:string} = {
            color: this.state.counter === this.props.maxCounter ? 'red' : 'white', // Изменение цвета текста
        };
        return(
           <div className="Counter">
               <h2 style={counterStyle}>{this.state.counter}</h2>
               <div className="containerButton">
                   <Button title = "inc" fun = {this.increase} disabled={this.state.counter >= this.props.maxCounter}/>
                   <Button title = "reset" fun = {this.reset} disabled={this.state.counter === 0}/>
               </div>
           </div>
        )
    }

    increase():void{
        this.setState({counter:this.state.counter + 1});
    }

    reset():void{
        this.setState({counter:0});
    }

}

export default Counter