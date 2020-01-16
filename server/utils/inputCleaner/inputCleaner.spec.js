const { inputCleaner } = require('./index');

describe('Input Cleaner', () => {
	it('should trim the input string', () => {
		const result = inputCleaner('  714 925 631  ');
		expect(result).toBe('714925631');
	});

	it('should return string without any space', () => {
		const result = inputCleaner('714 925 631');
		expect(result).toBe('714925631');
	});
});
