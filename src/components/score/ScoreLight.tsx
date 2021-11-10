import React from 'react'
import ScoreLogic, { ScoreProps } from './ScoreLogic';

import './ScoreLight.css'

const ScoreLight = ({local, visit}: ScoreProps) => {

    const {
        score,
        incremenetLocalScore,
        incremenetVisitScore
    } = ScoreLogic({local, visit});
    
    return (
        <div className="score-light">
            <div className="score-light__container">
                <span className="score-light__team" style={{backgroundColor: local.shirt}}>{local.name}</span>
                <span className="score-light__score">
                    <span onClick={()=>incremenetLocalScore()}>
                        {score.local}
                    </span>
                    -
                    <span onClick={()=>incremenetVisitScore()}>
                        {score.visit}
                    </span>
                </span>
                <span className="score-light__team" style={{backgroundColor: visit.shirt}}>{visit.name}</span>
            </div>
        </div>
    )
}

export default ScoreLight
