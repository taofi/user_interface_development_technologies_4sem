import React from "react";
import Button from './Button'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            counter: 0
        }
        this.increase = this.increase.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        const counterStyle = {
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

    increase(){
        this.setState({counter:this.state.counter + 1});
    }

    reset(){
        this.setState({counter:0});
    }

}

export default Counter