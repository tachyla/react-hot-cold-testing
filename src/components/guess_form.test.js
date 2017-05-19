import React from 'react';
import {mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm/> in-depth rendering testing', () => {
    it('Test GuessForm', () => {

        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback}/>);
        const val = 99999;
        wrapper.find('input[type="text"]').node.value = val;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(val.toString());
    })
} )
