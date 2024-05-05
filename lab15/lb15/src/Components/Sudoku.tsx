import React, {useEffect, useState} from 'react';
import Cell from "./Сell";
import {Field} from "../Reducer/field";



function Sudoku(props:{field:Field, n:number, changeNumber:(i:number, j:number, n:number) => void}):JSX.Element{
    return(<div className="Container">
        <div className="sudokuField">
            {Array.from({length: 9}, (_, i) => i).map((i) =>
                Array.from({length: 9}, (_, j) => j).map((j) =>
                    <Cell key={`${i}-${j}`} fun={()=>props.changeNumber(i, j, props.n)} sateNumber={props.field.errorState[i][j]} number={props.field.field[i][j]}/>
                )
            )}
        </div>
    </div>)
}


export default Sudoku;