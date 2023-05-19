import React from "react";
import CurrentScore from "./CurrentScore";
import BestScore from "./BestScore";

export default function Scoreboard() {
    return (
        <div className="d-flex justify-content-center gap-5 scoreboard">
            <CurrentScore />
            <BestScore />
        </div>
    )
}
