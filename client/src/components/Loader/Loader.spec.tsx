import { shallow } from 'enzyme';
import React from 'react';

import Loader from './Loader';

describe('Loader Component', () => {
	it('should render when showLoader is true', () => {
		const showLoader = true;
		const wrapper = shallow(<Loader showLoader={showLoader} />);

		expect(wrapper).toMatchSnapshot();
	});

	it('should render nothing when showLoader is false', () => {
		const showLoader = false;
		const wrapper = shallow(<Loader showLoader={showLoader} />);

		expect(wrapper.text()).toEqual('');
	});
});
