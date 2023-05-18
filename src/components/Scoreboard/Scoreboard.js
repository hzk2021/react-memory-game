import React from "react";
import CurrentScore from "./CurrentScore";
import BestScore from "./BestScore";

export default function Scoreboard() {
    return (
        <div className="scoreboard">
            <CurrentScore />
            <BestScore />
        </div>
    )
}
