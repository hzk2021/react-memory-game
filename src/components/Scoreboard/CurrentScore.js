import React, { useContext } from "react";
import { ScoreContext } from "../../Contexts/ScoreContext";

export default function CurrentScore() {
    const {score} = useContext(ScoreContext);
    return (
        <div className="score current-score py-2 px-4 rounded-pill bg-warning">
            <span>Current score: {score}</span>
        </div>
    )
}
