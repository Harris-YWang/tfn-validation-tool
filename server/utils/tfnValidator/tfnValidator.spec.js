const { tfnValidator } = require('./index');
const { inputCleaner } = require('../inputCleaner');
const { VALID, INVALID } = require('../../constants/options');

describe('9 Digit Alorithm', () => {
	it('should return expected results when input 714 925 631', () => {
		const testCase = inputCleaner('714 925 631');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 37 118 629', () => {
		const testCase = inputCleaner('37 118 629');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 648 188 499', () => {
		const testCase = inputCleaner('648 188 499');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 648 188 519', () => {
		const testCase = inputCleaner('648 188 519');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 648 188 527', () => {
		const testCase = inputCleaner('648 188 527');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 648 188 535', () => {
		const testCase = inputCleaner('648 188 535');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 123 456 789', () => {
		const testCase = inputCleaner('123 456 789');
		const result = tfnValidator(testCase);
		expect(result).toBe(INVALID);
	});
});

describe('8 Digit Alorithm', () => {
	it('should return expected results when input 81 854 402', () => {
		const testCase = inputCleaner('81 854 402');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 37 118 629', () => {
		const testCase = inputCleaner('37 118 629');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 37 118 660', () => {
		const testCase = inputCleaner('37 118 660');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 37 118 705', () => {
		const testCase = inputCleaner('37 118 705');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 38 593 474', () => {
		const testCase = inputCleaner('38 593 474');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 38 593 519', () => {
		const testCase = inputCleaner('38 593 519');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 85 655 734', () => {
		const testCase = inputCleaner('85 655 734');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 85 655 797', () => {
		const testCase = inputCleaner('85 655 797');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 85 655 810', () => {
		const testCase = inputCleaner('85 655 810');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 37 118 655', () => {
		const testCase = inputCleaner('37 118 655');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 37 118 676', () => {
		const testCase = inputCleaner('37 118 676');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 38 593 469', () => {
		const testCase = inputCleaner('38 593 469');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 38 593 503', () => {
		const testCase = inputCleaner('38 593 503');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 38 593 524', () => {
		const testCase = inputCleaner('38 593 524');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 85 655 755', () => {
		const testCase = inputCleaner('85 655 755');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
	});

	it('should return expected results when input 85 655 755', () => {
		const testCase = inputCleaner('85 655 755');
		const result = tfnValidator(testCase);
		expect(result).toBe(VALID);
  });
  
  it('should return expected results when input 12 345 678', () => {
		const testCase = inputCleaner('12 345 678');
		const result = tfnValidator(testCase);
		expect(result).toBe(INVALID);
  });
});
