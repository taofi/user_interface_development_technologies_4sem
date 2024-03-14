import React from "react";
function Button (props:{title: string; fun: () => void; disabled: boolean; }):JSX.Element {
    return(
        <button onClick={props.fun} disabled={props.disabled}>{props.title}</button>
    )
}
export default Button