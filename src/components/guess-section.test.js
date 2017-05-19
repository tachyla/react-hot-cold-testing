import React from 'react';
import {mount} from 'enzyme';
import GuessSection from './guess-section';
import GuessForm from './guess-form';

describe('<GuessSection/> in-depth rendering testing', () => {
    it('Test GuessSection', () => {

        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback}/>);
        const val = 99999;
        wrapper.find('input[type="text"]').node.value = val;

        console.log(wrapper.find('#userGuess').node.value)
        console.log("\t\t!!!!!!!!!")
        console.log(callback)
        console.log("\t\t!!!!!!!!!")


        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(val.toString());
    })
} )
