import React, { useEffect, useState } from "react";
import "./maintop.css";

function MainTop(props) {

    function handleClick(e) {
        let btnId = e.target.id;
        alert(btnId);
        if(btnId === "button1") {
            props.setButtonsState(...props.buttonsState, props.buttonsState.button1 = true)
            alert("hrllo");
        }

    };

    return (
        <button id={props.id} className="section" onClick={(e) => {
            handleClick(e);
        }}>
            {props.text}
        </button>
    );
}

export default MainTop;