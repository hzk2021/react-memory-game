import React, { useContext } from "react";
import { ScoreContext } from "../../Contexts/ScoreContext";

export default function BestScore() {
    const score = useContext(ScoreContext);
    return (
        <div className="score best-score">
            <span>Best score: {score}</span>
        </div>
    )
}
