function findRotatedIndex(arr, num) {
	const rotatedAt = findWhereRotated(arr);
	console.log(rotatedAt, "*****************************************");
	if (rotatedAt > 0 && num >= arr[0] && num <= arr[rotatedAt - 1]) {
		return findIndex(arr, num, 0, rotatedAt - 1);
	} else {
		return findIndex(arr, num, rotatedAt, arr.length - 1);
	}
}

const findWhereRotated = (arr, beg = 0, end = arr.length - 1) => {
	console.log(beg <= end);
	if (beg <= end) {
		const mid = beg + Math.floor((end - beg) / 2);
		if (arr[mid] > arr[mid + 1]) {
			return mid + 1;
		} else if (arr[beg] <= arr[mid]) {
			return findWhereRotated(arr, mid + 1, end);
		} else {
			return findWhereRotated(arr, beg, mid - 1);
		}
	}
	return 0;
};

const findIndex = (arr, num, beg = 0, end = arr.length - 1) => {
	if (arr.length === 0) return -1;
	if (num < arr[beg] || num > arr[end]) return -1;
	if (beg <= end) {
		const mid = beg + Math.floor((end - beg) / 2);
		if (arr[mid] === num) {
			return mid;
		} else if (arr[mid] < num) {
			return findIndex(arr, num, mid + 1, end);
		} else if (arr[mid] > num) {
			return findIndex(arr, num, beg, mid - 1);
		}
	}
};

module.exports = findRotatedIndex;
