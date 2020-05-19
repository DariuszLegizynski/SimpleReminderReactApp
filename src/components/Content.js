import React from "react";

function Content(){
    const buttonText = "Click me!";
    const buttonStyle = {backgroundColor: "blue", color: "white"};

    return(
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" placeholder="type your name in here" />
            <button style={buttonStyle}>{buttonText}</button>
            <p>this is some content</p>
        </div>
    )
}

export default Content;