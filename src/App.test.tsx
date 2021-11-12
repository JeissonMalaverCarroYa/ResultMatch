import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import App from './App';
import ReactTestRenderer from 'react-test-renderer';


jest.mock('./components/ScoreTs', () => (props: any) => (<div test-props={props} data-testid="ScoreTs" />));
jest.mock('./components/ScoreJs', () => (props: any) => (<div test-props={props} data-testid="ScoreJs" />));
jest.mock('./components/ScoreJsPrototypes', () => (props: any) => (<div test-props={props} data-testid="ScoreJsPrototypes" />));
jest.mock('./components/score/Score', () => (props: any) => (<div test-props={props} data-testid="Score" />));
jest.mock('./components/score/ScoreLight', () => (props: any) => (<div test-props={props} data-testid="ScoreLight" />));


test('create snapshot', () => {
  const tree = ReactTestRenderer
    .create(<App />)
    .toJSON();    
  expect(tree).toMatchSnapshot();

});


describe('create subcomponents in <App />', () => {

  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<App />);
  });

  test('find only a component ScoreTs', () => {
    expect(wrapper.getByTestId('ScoreTs')).toBeDefined();
  });
  
  test('find many components Score', () => {
    expect(wrapper.getAllByTestId('Score')).toBeDefined();
  });

});