import React from 'react';
import {mount} from 'enzyme';
import Game from './game';
import expect from 'expect'

describe('<Game/> in-depth rendering testing', () => {
    it('Test state values', () => {
        const wrapper = mount(<Game />);
        const state = wrapper.instance().state;
        expect(state.correctAnswer).toBeA('number');
        expect(state.guesses.length).toEqual(0);
        expect(state.feedback).toBeA('string');
    })
} )
