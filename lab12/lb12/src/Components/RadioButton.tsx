import React from 'react';

function RadioButtons(props:{selectedValue:string, handleChange:(e:any)=>void}) {
    return (
        <form>
            <label>
                all
                <input
                    type="radio"
                    value="all"
                    checked={props.selectedValue === "all"}
                    onChange={props.handleChange}
                />
            </label>
            <label>
                movies
                <input
                    type="radio"
                    value="movies"
                    checked={props.selectedValue === "movies"}
                    onChange={props.handleChange}
                />
            </label>
            <label>
                series
                <input
                    type="radio"
                    value="series"
                    checked={props.selectedValue === "series"}
                    onChange={props.handleChange}
                />
            </label>
        </form>
    );
}

export default RadioButtons;
