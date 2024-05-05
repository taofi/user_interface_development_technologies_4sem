import {CHANGE_CELL, GENERATE_FIELD, GET_CLUE, SET_NUMBER} from "./actionsTypes";


export const generateField = ()=>({
    type: GENERATE_FIELD
})

export const getClue = ()=>({
    type: GET_CLUE
})

export const changeCell = (i:number, j:number, n:number)=>({
    type: CHANGE_CELL,
    i,
    j,
    n
})

export const setNumber = (n:number)=>({
    type: SET_NUMBER,
    n
})



export type Action = {
    type: string,
    i? : number,
    j? : number,
    n? : number
}

