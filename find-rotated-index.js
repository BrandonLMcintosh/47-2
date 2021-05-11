function findRotatedIndex(arr, num) {
	const rotatedAt = findWhereRoated(arr);
	if (num <= arr[arr.length - 1]) {
	}
}

const findWhereRotated = (arr, beg = 0, end = arr.length - 1) => {
	if (beg <= end) {
		const mid = beg + Math.floor((beg + end) / 2);
		if (arr[mid] < arr[mid - 1]) {
			return mid;
		} else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[0]) {
			return findWhereRotated(arr, beg, mid - 1);
		} else {
			return findWhereRotated(arr, mid + 1, end);
		}
	}
};

const findIndex = (arr, num, beg = 0, end = arr.length - 1) => {
	if (beg <= end) {
		const mid = beg + Math.floor((beg + end) / 2);
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
