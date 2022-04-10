import React from "react";


// This is the component we are testing

function Counter(props) {

    const { value } = props;
    return (
        <p data-testid="counter-test">
            {value}
        </p>
    );
}

export default Counter;