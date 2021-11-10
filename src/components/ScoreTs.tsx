import React, {FC, useState} from 'react'
import './Score.css'

type Team = {
    name: string;
    score: number;
    shirt: string;
}

type ScoreProps = {
    local: Team;
    visit: Team;
}

type ResultScore = {
    local: number;
    visit: number;
}

const ScoreTs: FC<ScoreProps> = ({local, visit}) => {

    const [score, setScore] = useState<ResultScore>({
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

export default ScoreTs
