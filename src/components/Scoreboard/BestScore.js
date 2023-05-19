import React, { useContext } from "react";
import { ScoreContext } from "../../Contexts/ScoreContext";

export default function BestScore() {
    const {bestScore} = useContext(ScoreContext);
    return (
        <div className="score best-score score current-score py-2 px-4 rounded-pill bg-success">
            <span>Best score: {bestScore}</span>
        </div>
    )
}
