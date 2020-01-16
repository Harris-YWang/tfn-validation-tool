const { tfnValidator } = require('../utils/tfnValidator');
const { timingCounter } = require('../utils/timingCounter');
const { inputValidator } = require('../utils/inputValidator');
const { inputCleaner } = require('../utils/inputCleaner');

exports.validate = (req, res, next) => {
	const { tfnNumber } = req.body;
	const cleanedTfnNumber = inputCleaner(tfnNumber);

	let errorMsg = '';
	let validity = '';
	errorMsg = inputValidator(cleanedTfnNumber)
		? inputValidator(cleanedTfnNumber)
		: timingCounter(cleanedTfnNumber);

	if (!errorMsg) validity = tfnValidator(cleanedTfnNumber);

	errorMsg ? res.json({ errorMsg }) : res.json({ validity });
};
