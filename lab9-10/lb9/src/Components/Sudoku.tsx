import React, {useEffect, useState} from 'react';
import Cell from "./Сell";
import Button from "./Button";
import generatePuzzle from "../Scipts/Generator";
import solveSudoku from "../Scipts/Solver";
import { adjustMatrix, Copy } from "../Scipts/Checker";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

let saveField:number[][] =new Array(9).fill(0).map(() => new Array(9).fill(0));

function Generate():number[][]{
    let Field = generatePuzzle()
    saveField = solveSudoku(Field) as number[][];
    // console.log(saveField);
    return Field;
}

function Sudoku(props:{chosenNumber:number}):JSX.Element{
    const [isCorrect, setCorrect] = useState<Boolean>(false);
    const [field, setField] = useState<number[][]>(
        new Array(9).fill(0).map(() => new Array(9).fill(0))
    );
    const [fieldCellState, setFieldCellState] = useState<number[][]>(
        new Array(9).fill(0).map(() => new Array(9).fill(0))
    );
    const [errorCounter, setErrors] = useState<number>(0);

    const background = {backgroundColor:isCorrect?"yellow":"transparent"}
    const correctField=() => {setCorrect(true); setTimeout(()=>setCorrect(false), 400)}



    useEffect(() => {
        const handleKeyDown = (e:any) => {
            if(e.key === 'r' || e.key === 'к')
                fieldGenerate()
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    const fieldCheck = (m?:number[][])=>{
        let matrix:number[][];

        if(m === undefined)
            matrix= adjustMatrix(saveField, field);
        else
            matrix= adjustMatrix(saveField, m);

        if(!matrix.some(row => row.some(element => element < 0))) {
            correctField();
        }

        return matrix;
    }
    const fieldGenerate = () => {
        const generated:number[][] = Generate();
        setField(generated);
        setCorrect(false);
        setErrors(0);
        let state :number[][]= adjustMatrix(saveField, generated);
        console.log(Copy(state));
        console.log(Copy(saveField));
        setFieldCellState(state);
    }
    const fieldChange = (i:number, j:number) => ():void => {
        const newField:number[][] = Copy(field);
        if(props.chosenNumber === newField[i][j])
            newField[i][j] = 0;
        else
            newField[i][j] = props.chosenNumber;
        if(props.chosenNumber !== saveField[i][j])
            setErrors(errorCounter + 1);
        setFieldCellState(fieldCheck(newField));
        setField(newField);
    }



    return(<div className="Container">
        <div style={background} className="sudokuField">
            {Array.from({length: 9}, (_, i) => i).map((i) =>
                Array.from({length: 9}, (_, j) => j).map((j) =>
                    <Cell key={`${i}-${j}`} fun={fieldChange(i, j)} sateNumber={fieldCellState[i][j]} number={field[i][j]}/>
                )
            )}
        </div>
        <div className="ButtonContainer">
            <Button fun={fieldGenerate} text="Новая игра" name="gameButton"/>
            <Button fun={() => setFieldCellState(fieldCheck())} text="Проверить" name="gameButton"/>
        </div>
        <p> {"Errors: " + errorCounter}</p>
    </div>)
}


export default Sudoku;