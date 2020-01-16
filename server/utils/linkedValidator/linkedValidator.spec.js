const { linkedValidator } = require('./index');

const A = '123456789';
const B = '123459876';
const C = '443459871';
const D = '987212231';

describe('Linked Validator', () => {
	it('should judge if two values are linked', () => {
		const result = linkedValidator(A, B);
		expect(result).toBe(true);
	});

	it('should judge if two values are linked', () => {
		const result = linkedValidator(B, C);
		expect(result).toBe(true);
	});

	it('should judge when two values are the same', () => {
		const result = linkedValidator(A, A);
		expect(result).toBe(false);
	});

	it('should judge when two values are not linked', () => {
		const result = linkedValidator(C, D);
		expect(result).toBe(false);
	});
});
