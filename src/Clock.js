import React from "react";

function Clock(data) {
    return(
        <div>
            <h4>Hello</h4>
            <h5>It's {data.date.toLocaleTimeString()} ..</h5>
        </div>
    );
}

export default Clock;
