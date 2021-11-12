import { useState } from "react";
import ScoreLogic from './ScoreLogic'

jest.mock('react');
test('should increment local', () => {
    const setStateMock = jest.fn();
    const useStateMock = useState as jest.MockedFunction<any>;
    useStateMock.mockImplementation(stateValue => [stateValue, setStateMock]);

    const props = {
        local: {name: "Sun", score: 3, shirt: 'red'},
        visit: {name: "She", score: 1, shirt: 'white'},
    };

    const {
        score,
        incremenetLocalScore,
        incremenetVisitScore
    } = ScoreLogic(props);

    expect(score.local).toBe(props.local.score)
    incremenetLocalScore();
    expect(setStateMock).toHaveBeenCalledTimes(1);
    incremenetVisitScore();
    expect(setStateMock).toHaveBeenCalledTimes(2);
})
