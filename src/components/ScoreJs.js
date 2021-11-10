import React, { useState } from 'react'
import './Score.css'

const ScoreJs = ({local, visit}) => {

    const [score, setScore] = useState({
        local: local.score,
        visit: visit.score
    });

    const incremenetLocalScore = () =>
        setScore(s=> ({ ...s, local: s.local + 1}));

    const incremenetVisitScore = () => 
        setScore(s=> ({ ...s, visit: s.visit + 1}));
    
    return (
        <div className="result">
            <div className="result__uniform" style={{backgroundColor: local.shirt}}></div>
            <div className="result__container">
                <span className="result__team">{local.name}</span>
                <span className="result__score">
                    <span onClick={()=>incremenetLocalScore()}>
                        {score.local}
                    </span>
                    -
                    <span onClick={()=>incremenetVisitScore()}>
                        {score.visit}
                    </span>
                </span>
                <span className="result__team">{visit.name}</span>
            </div>
            <div className="result__uniform" style={{backgroundColor: visit.shirt}}></div>
        </div>
    )
}

export default ScoreJs
