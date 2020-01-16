const { EIGHT_DIGITS_WF, NINE_DIGITS_WF, VALID, INVALID } = require('../../constants/options');

exports.tfnValidator = tfnNumber => {
	let weightingFactors;
	if (tfnNumber.length === 8) weightingFactors = EIGHT_DIGITS_WF;
	if (tfnNumber.length === 9) weightingFactors = NINE_DIGITS_WF;

	let sum = 0;
	for (let index in tfnNumber) {
		sum += weightingFactors[index] * tfnNumber[index];
	}

	const validity = sum % 11 === 0 ? VALID : INVALID;

	return validity;
};
