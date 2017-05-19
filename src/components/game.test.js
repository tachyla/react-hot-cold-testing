import React from 'react';
import {mount, shallow} from 'enzyme';
import Game from './game';

import expect from 'expect'
import enzymify from 'expect-enzyme'

expect.extend(enzymify)

describe('<Game/> in-depth rendering testing', () => {
    it('Test state values', () => {
        const wrapper = mount(<Game />);
        const state = wrapper.instance().state;
        expect(typeof state.correctAnswer).toEqual('number');
        expect(state.guesses.length).toEqual(0);
        expect(typeof state.feedback).toEqual('string');
    })
} )
describe('<Game/> method testing', () => {
    it('Tests newGame functionality', () => {
        const callback = jest.fn();
        const wrapper = mount(<Game newGame={callback}/>);
        const originalAnswer = wrapper.instance().state.correctAnswer;
        callback(5);
        const newAnswer = setTimeout(()=>wrapper.instance().state.correctAnswer,1) 
        console.log(originalAnswer);
        console.log(newAnswer);
        expect(newAnswer).toNotEqual(originalAnswer);
    })

    it('Tests guess accepts numbers validity', () => {
        const callback = jest.fn();
        const wrapper = mount(<Game OnGuess={callback}/>);
        wrapper.instance().guess(5);
        expect(wrapper.state('feedback')).toNotEqual('Make your guess!');
        expect(wrapper.state('feedback')).toNotEqual('Please enter a valid number');
        wrapper.instance().guess('a');
        expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
    })
})



