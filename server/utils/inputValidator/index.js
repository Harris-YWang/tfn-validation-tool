const { INVALID_CHARS_ERR_MSG, WRONG_DIGITS_ERR_MSG } = require('../../constants/options');

exports.inputValidator = tfnNumber => {
	let errorMsg = '';

	if (!tfnNumber.match(/^[0-9]+$/)) {
		errorMsg += INVALID_CHARS_ERR_MSG;
	}

	if (!(tfnNumber.length === 8 || tfnNumber.length === 9)) {
		errorMsg += WRONG_DIGITS_ERR_MSG;
	}

	return errorMsg;
};
