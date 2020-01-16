const cache = require('memory-cache');
const { linkedValidator } = require('../linkedValidator');
const {
	COUNT_KEY,
	TFN_KEY,
	DURATION_IN_SEC,
	MULTIPLE_ATTEMPTS_ERR_MSG
} = require('../../constants/options');

exports.timingCounter = tfnNumber => {
	let errorMsg = '';
	const duration = DURATION_IN_SEC * 1000;

	if (cache.get(TFN_KEY) === null) {
		cache.put(COUNT_KEY, 0);
		cache.put(TFN_KEY, tfnNumber, duration);
	} else {
		const linkedFlag = linkedValidator(tfnNumber, cache.get(TFN_KEY));
		if (linkedFlag) cache.put(COUNT_KEY, cache.get(COUNT_KEY) + 1);
		cache.put(TFN_KEY, tfnNumber, duration);
	}

	if (cache.get(COUNT_KEY) >= 2) {
		cache.put(COUNT_KEY, 2, duration);
		errorMsg = MULTIPLE_ATTEMPTS_ERR_MSG;
		return errorMsg;
	}
};
