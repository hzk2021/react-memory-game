import React from "react";

export default function Overlay({message, restartEvent}) {
    return (
        <div className="bg-dark flex-column position-absolute w-100 h-100 bg-opacity-75 top-0 d-flex justify-content-center align-items-center text-white">
            <p className="">{message}</p>
            <button onClick={restartEvent}>New Game</button>
        </div>
    )
}
