import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ScoreJsPrototypes = ({local, visit}) => {

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
const ResultMatch = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    shirt: PropTypes.string.isRequired,
};

ScoreJsPrototypes.propTypes = {
    local: PropTypes.shape(ResultMatch),
    visit: PropTypes.shape(ResultMatch),
}

export default ScoreJsPrototypes
