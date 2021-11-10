import React from 'react'
import './Score.css'
import ScoreLogic, { ScoreProps } from './ScoreLogic'




const Score = ({local, visit}: ScoreProps) => {

    const {
        score,
        incremenetLocalScore,
        incremenetVisitScore
    } = ScoreLogic({local, visit});
    

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

export default Score
