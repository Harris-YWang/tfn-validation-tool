const { INVALID_CHARS_ERR_MSG, WRONG_DIGITS_ERR_MSG } = require('../../constants/options');
const { inputValidator } = require('./index');

describe('Input Validator', () => {
	it('should give out error message when the input digits are not 8 or 9', () => {
		const errorMsg = inputValidator('123');
		expect(errorMsg).toBe(WRONG_DIGITS_ERR_MSG);
	});

	it('should give out error message when the input digits are not 8 or 9', () => {
		const errorMsg = inputValidator('1234567890');
		expect(errorMsg).toBe(WRONG_DIGITS_ERR_MSG);
	});

	it('should give out error message when the input includes invalid char(s)', () => {
		const errorMsg = inputValidator('12345678a');
		expect(errorMsg).toBe(INVALID_CHARS_ERR_MSG);
	});

	it('should give out error message when the input includes invalid char(s)', () => {
		const errorMsg = inputValidator('!12345678');
		expect(errorMsg).toBe(INVALID_CHARS_ERR_MSG);
	});

	it('should give out both error messages when the input includes invalid char(s) & the input includes invalid chars', () => {
		const errorMsg = inputValidator('12!');
		expect(errorMsg).toBe(INVALID_CHARS_ERR_MSG + WRONG_DIGITS_ERR_MSG);
	});

	it('should give empty error messages when the input is valid', () => {
		const errorMsg = inputValidator('719925631');
		expect(errorMsg).toBe('');
	});

	it('should give empty error messages when the input is valid', () => {
		const errorMsg = inputValidator('81854402');
		expect(errorMsg).toBe('');
	});
});
