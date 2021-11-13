import Score from './Score'
import ReactTestRenderer from 'react-test-renderer';
import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react';
import ScoreLogic from './ScoreLogic';

const scoreStateMock = {local: 3, visit: 1};
const mockScoreLogicResult = {
    score: scoreStateMock,
    incremenetLocalScore: jest.fn(),
    incremenetVisitScore: jest.fn()
}

jest.mock('./ScoreLogic');

beforeEach(() => {
    const mockScoreLogic = ScoreLogic as jest.Mock<any>;
    mockScoreLogic.mockImplementation(()=> mockScoreLogicResult)
});


test('should <Score />', () => {
    
    const tree = ReactTestRenderer
        .create(
            <Score
                local= {{name: "Sun", score: 3, shirt: 'red'}}
                visit= {{name: "She", score: 1, shirt: 'white'}}
            />
        ).toJSON();    
    expect(tree).toMatchSnapshot();
    
})


describe('create subcomponents in <App />', () => {

    let wrapper: RenderResult;

    beforeEach(async () => {
        wrapper = await render(
            <Score
                local= {{name: "Sun", score: 3, shirt: 'red'}}
                visit= {{name: "She", score: 1, shirt: 'white'}}
            />
        );
    });

    test('should call incremenetLocalScore', () => {
        fireEvent.click(wrapper.container.querySelector('.result__score-local'))
        expect(mockScoreLogicResult.incremenetLocalScore).toHaveBeenCalled();
        expect(mockScoreLogicResult.incremenetVisitScore).not.toHaveBeenCalled();
        
    });

    test('should call incremenetVisitScore', () => {
        fireEvent.click(wrapper.container.querySelector('.result__score-visit'))
        expect(mockScoreLogicResult.incremenetLocalScore).not.toHaveBeenCalled();
        expect(mockScoreLogicResult.incremenetVisitScore).toHaveBeenCalled();
        
    });

});

