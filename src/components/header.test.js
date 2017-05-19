import React from 'react';
import {mount, shallow} from 'enzyme';
import Header from './header';

import expect from 'expect'
import enzymify from 'expect-enzyme'

expect.extend(enzymify)

describe('<Header/> in-depth rendering testing', () => {
    it('Test state values', () => {
        const wrapper = mount(<Header />);
        const state = wrapper.instance().state;
        expect(typeof state.showInfoModal).toEqual('boolean');

    })

    it('Check that clicking info button works',()=>{
        const wrapper = mount(<Header />);
        const state = wrapper.instance().state;
        expect(wrapper.state('showInfoModal')).toEqual(false);
        expect(wrapper.find('.overlay')).toNotExist();
        wrapper.find('.what').simulate('click');
        expect(wrapper.state('showInfoModal')).toEqual(true);
        expect(wrapper.find('.overlay')).toExist();
        wrapper.find('.close').simulate('click');
        expect(wrapper.state('showInfoModal')).toEqual(false);
        expect(wrapper.find('.overlay')).toNotExist();
    })
} )
