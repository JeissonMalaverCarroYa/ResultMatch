import {useState} from 'react'
import './Score.css'

interface ResultScore {
    local: number,
    visit: number,
}

interface Team {
    name: string,
    score: number,
    shirt: string,
}

export interface ScoreProps {
    local: Team,
    visit: Team
}

const ScoreLogic = ({local, visit}: ScoreProps) => {

    const [score, setScore] = useState<ResultScore>({
        local: local.score,
        visit: visit.score
    });

    const incremenetLocalScore = () =>
        setScore(s=> ({ ...s, local: s.local + 1}));

    const incremenetVisitScore = () => 
        setScore(s=> ({ ...s, visit: s.visit + 1}));
    

    return {
        score,
        incremenetLocalScore,
        incremenetVisitScore
    }
}

export default ScoreLogic
