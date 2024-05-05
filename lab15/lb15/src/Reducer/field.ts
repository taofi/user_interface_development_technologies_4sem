import {CHANGE_CELL, GENERATE_FIELD, GET_CLUE} from "../Action/actionsTypes";
import generatePuzzle from "../Scipts/Generator";
import {adjustMatrix, Copy} from "../Scipts/Checker";
import Solver from "../Scipts/Solver";
import solveSudoku from "../Scipts/Solver";
import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

export interface Field {
    field: number[][];
    correctField: number[][];
    errorState: number[][];
}


type FieldAction = { type: typeof GENERATE_FIELD;} | {type: typeof GET_CLUE}
    | { type: typeof CHANGE_CELL; i: number, j:number, n:number };

export default function fieldReducer(
    state: Field = {field: Array(9).fill(null).map(() => Array(9).fill(0)),
        correctField: Array(9).fill(null).map(() => Array(9).fill(0)),
        errorState: Array(9).fill(null).map(() => Array(9).fill(0))},
    action: FieldAction
): Field{
    if (action.type === GENERATE_FIELD) {
        let field:number[][] = generatePuzzle();
        let correct:number[][]|null = solveSudoku(field);
        return {field: field, correctField: correct==null?Copy(state.correctField):correct, errorState: adjustMatrix(field, field)};
    } else if (action.type === CHANGE_CELL) {
        let field: number[][] = Copy(state.field);
        if(field[action.i][action.j] !== action.n)
            field[action.i][action.j] = action.n;
        else
            field[action.i][action.j] = 0;
        return {
            field: field,
            correctField:Copy(state.correctField),
            errorState: adjustMatrix(field, field)
        };
    } else if(action.type === GET_CLUE){
        const newField: number[][] = Copy(state.field);

        for (let i = 0; i < newField.length; i++) {
            for (let j = 0; j < newField.length; j++) {
                if (newField[i][j] === 0) {
                    newField[i][j] = state.correctField[i][j];
                    return {
                        ...state,
                        field:newField
                    };
                }
            }
        }
        return state;

    } else {
        return state;
    }
}