import { shallow } from 'enzyme';
import React from 'react';
import ErrorMessage from './index';

describe('ErrorMessage Component', () => {
	it('should render when there is an error message', () => {
		const errorMsg = 'Sample Error Message';
		const wrapper = shallow(<ErrorMessage errorMsg={errorMsg} />);

		expect(wrapper).toMatchSnapshot();
	});

	it('should render nothing when no error message', () => {
		const errorMsg = '';
		const wrapper = shallow(<ErrorMessage errorMsg={errorMsg} />);

		expect(wrapper.text()).toEqual('');
	});

	it('should render warning alert', () => {
		const errorMsg = 'Sample Error Message';
		const wrapper = shallow(<ErrorMessage errorMsg={errorMsg} />);

		expect(wrapper.find('div.alert-warning').length).toBe(1);
	});
});
