
exports.min = function min(array) {

	if (Array.isArray(array) == false || array.length == 0) {
		
		return 0;

	} else {
		
		let result = array[0];

		for (let i = 1; i < array.length; i++) {
			result = Math.min(result, array[i]);
		}

		return result;
	}

}

exports.max = function max(array) {

	if (Array.isArray(array) == false || array.length == 0) {
		
		return 0;

	} else {
		
		let result = array[0];

		for (let i = 1; i < array.length; i++) {
			result = Math.max(result, array[i]);
		}

		return result;
	}

}

exports.avg = function avg(array) {

	if (Array.isArray(array) == false || array.length == 0) {
		
		return 0;

	} else {

		return array.reduce((a, b) => a + b) / array.length;
	
	}

}
