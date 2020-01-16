const { timingCounter } = require('./index');
const { DURATION_IN_SEC, MULTIPLE_ATTEMPTS_ERR_MSG } = require('../../constants/options');

jest.useFakeTimers();

const A = '123456789';
const B = '123459876';
const C = '443459871';
const D = '443444444';

describe('Timing Counter', () => {
	it('should give out an error message when input linked validation attempts within 30 seconds', () => {
		timingCounter(A);
		timingCounter(B);
		const errorMsg = timingCounter(C);
		expect(errorMsg).toBe(MULTIPLE_ATTEMPTS_ERR_MSG);
	});

	it('should give out an error message when input linked validation attempts within 30 seconds', () => {
		timingCounter(A);
		timingCounter(B);
		timingCounter(C);
		const errorMsg = timingCounter(D);
		expect(errorMsg).toBe(MULTIPLE_ATTEMPTS_ERR_MSG);
	});

	it('should has no error message when the duration of three inputs are more than 30 seconds', () => {
		timingCounter(A);
		timingCounter(B);
		let errorMsg = timingCounter(C);
		expect(errorMsg).toBe(MULTIPLE_ATTEMPTS_ERR_MSG);
		jest.advanceTimersByTime(DURATION_IN_SEC * 1000 + 1);
		errorMsg = timingCounter(C);
		expect(errorMsg).toBe(undefined);
	});
});
