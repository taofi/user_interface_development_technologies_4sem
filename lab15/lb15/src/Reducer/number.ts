import {SET_NUMBER} from "../Action/actionsTypes";

export interface Numbers {
    n:number;
}


type NumbersAction = { type: typeof SET_NUMBER; n:number}

export default function numberReducer(
    state: Numbers = {n:1},
    action: NumbersAction
): Numbers{
    if(action.type === SET_NUMBER) {
        return {n:action.n}
    }
    else {
        return state;
    }
}

