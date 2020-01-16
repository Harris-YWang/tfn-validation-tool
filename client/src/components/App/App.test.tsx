import { shallow, mount } from 'enzyme';
import React from 'react';

import App from './';

describe('<App />', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<App />);

		expect(wrapper).toMatchSnapshot();
	});

	it('handles input change', () => {
		const wrapper = mount(<App />);

		expect(wrapper.find('input').props().value).toBe('');

		wrapper.find('input').simulate('change', {
			target: { value: '714 925 631' }
		});

		wrapper.update();

		expect(wrapper.find('input').props().value).toEqual('714 925 631');
	});

	it('handles submit', () => {
		const wrapper = mount(<App />);
		let prevented = false;

		wrapper.find('input').simulate('change', {
			target: { value: '714 925 631' }
		});
		wrapper.find('form').simulate('submit', {
			preventDefault: () => {
				prevented = true;
			}
		});

		expect(prevented).toBe(true);
	});
});
