import { shallow } from 'enzyme';
import React from 'react';
import Layout from './index';

describe('Layout Component', () => {
	it('should render without crashing', () => {
		const children = <div>Hello World!</div>;
		const wrapper = shallow(<Layout>{children}</Layout>);

		expect(wrapper).toMatchSnapshot();
	});

	it('should render jumbotron', () => {
		const children = <div>Hello World!</div>;
		const wrapper = shallow(<Layout>{children}</Layout>);

		expect(wrapper.find('section.jumbotron').length).toBe(1);
	});
});
