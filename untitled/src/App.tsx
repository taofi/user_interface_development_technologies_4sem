import React from 'react';
import Counter from "./Components/Counter";
function App():JSX.Element {
  return (
      <div className="App">
        <Counter maxCounter = {6}/>
        <Counter maxCounter = {8}/>
        <Counter maxCounter = {10}/>
        <Counter maxCounter = {15}/>
      </div>
  );
}

export default App;
