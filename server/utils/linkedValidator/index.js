const { CONSECUTIVE_DIGITS } = require('../../constants/options');

exports.linkedValidator = (tfnNumberOne, tfnNumberTwo) => {
	let linkedFlag = false;

	for (let i = 0; i < tfnNumberOne.length - CONSECUTIVE_DIGITS + 1; i++) {
		if (
			tfnNumberOne.substring(i, i + CONSECUTIVE_DIGITS) ===
			tfnNumberTwo.substring(i, i + CONSECUTIVE_DIGITS)
		)
			linkedFlag = true;
	}

	if (tfnNumberOne === tfnNumberTwo) linkedFlag = false;

	return linkedFlag;
};
