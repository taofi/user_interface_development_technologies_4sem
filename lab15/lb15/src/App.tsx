import React from 'react';
import Sudoku from "./Components/Sudoku";
import NumbersPanel from "./Container/NumbersPanel";
import SudokuContainer from "./Container/SudokuContainer";
import GenerateButton from "./Container/GenerateButton";
import ClueButton from "./Container/ClueButton";

function App() {
  return (
    <div className="App">
        <NumbersPanel />
        <SudokuContainer/>
        <div className="ButtonContainer">
            <GenerateButton text="Новая игра" name="gameButton"/>
            <ClueButton name="gameButton" text="подсказка"/>
        </div>
    </div>
  );
}

export default App;
