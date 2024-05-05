import {Dispatch} from "redux";
import {Action, getClue} from "../Action";
import {connect} from "react-redux";
import button from "../Components/Button";


const mapDispatchToProps = (dispatch : Dispatch<Action>) => ({
    fun: () =>
        dispatch(getClue())
});
const ClueButton = connect(null, mapDispatchToProps)(button);
export default ClueButton;

