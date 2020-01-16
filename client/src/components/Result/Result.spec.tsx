import { shallow } from 'enzyme';
import React from 'react';
import Result from './index';

describe('Result Component', () => {
	it('should render when there is an validity value', () => {
		const validity = 'valid';
		const wrapper = shallow(<Result validity={validity} />);

		expect(wrapper).toMatchSnapshot();
	});

	it('should render nothing when no validity value', () => {
		const validity = '';
		const wrapper = shallow(<Result validity={validity} />);

		expect(wrapper.text()).toEqual('');
	});

	it('should render primary alert', () => {
		const validity = 'valid';
		const wrapper = shallow(<Result validity={validity} />);

		expect(wrapper.find('div.alert-primary').length).toBe(1);
	});
});
