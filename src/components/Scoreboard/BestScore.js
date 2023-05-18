import React, { useContext } from "react";
import { ScoreContext } from "../../Contexts/ScoreContext";

export default function BestScore() {
    const {bestScore} = useContext(ScoreContext);
    return (
        <div className="score best-score">
            <span>Best score: {bestScore}</span>
        </div>
    )
}
