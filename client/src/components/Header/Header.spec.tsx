import { shallow } from 'enzyme';
import React from 'react';
import Header from './index';

describe('Header Component', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<Header />);

		expect(wrapper).toMatchSnapshot();
	});
});
