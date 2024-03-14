import React from "react";

class Button extends React.Component {
    render() {
        const {title, fun, disabled = false } = this.props;
        return(
            <button onClick={fun} disabled={disabled}>{title}</button>
        )
    }
}

export default Button