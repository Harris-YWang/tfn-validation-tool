import { shallow } from 'enzyme';
import React from 'react';
import Footer from './index';

describe('Footer Component', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<Footer />);

		expect(wrapper).toMatchSnapshot();
	});
});
