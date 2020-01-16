// Jest-dom adds custom jest matchers for asserting on DOM nodes.
// Allows you to do things like:
// Expect(element).toHaveTextContent(/react/i)
// Learn more: https://github.com/testing-library/jest-dom
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
	adapter: new EnzymeAdapter(),
	disableLifecycleMethods: true
});
