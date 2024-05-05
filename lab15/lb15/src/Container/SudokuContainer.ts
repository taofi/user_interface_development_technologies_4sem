import {State} from "../Reducer";
import {Dispatch} from "redux";
import {Action, changeCell, setNumber} from "../Action";
import {connect} from "react-redux";
import Sudoku from "../Components/Sudoku";
import {Field} from "../Reducer/field";

const mapStateToProps = (state : State) : {field:Field, n:number} => ({
    field: state.field,
    n: state.number.n,
});

const mapDispatchToProps = (dispatch : Dispatch<Action>) => ({
    changeNumber: (i:number, j:number, n:number) =>
        dispatch(changeCell(i, j, n))
});
const NumbersPanel = connect(mapStateToProps, mapDispatchToProps)(Sudoku);
export default NumbersPanel;

