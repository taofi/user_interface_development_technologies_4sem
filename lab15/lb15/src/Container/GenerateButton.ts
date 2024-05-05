import {Dispatch} from "redux";
import {Action, generateField} from "../Action";
import {connect} from "react-redux";
import button from "../Components/Button";


const mapDispatchToProps = (dispatch : Dispatch<Action>) => ({
    fun: () =>
        dispatch(generateField())
});
const GenerateButton = connect(null, mapDispatchToProps)(button);
export default GenerateButton;

