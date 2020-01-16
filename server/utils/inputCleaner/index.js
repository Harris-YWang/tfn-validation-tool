exports.inputCleaner = tfnNumber => {
	cleanedTfnNumber = tfnNumber.replace(/\s+/g, '');
	return cleanedTfnNumber;
};
