function findRotationCount(arr, beg = 0, end = arr.length - 1) {
	if (end < beg) return 0;
	if (end === beg) return beg;
	let mid = Math.floor((beg + end) / 2);
	if (mid < end && arr[mid + 1] < arr[mid]) return mid + 1;
	if (mid > beg && arr[mid] < arr[mid - 1]) return mid;
	if (arr[end] > arr[mid]) return findRotationCount(arr, beg, mid - 1);
	return findRotationCount(arr, mid + 1, end);
}

module.exports = findRotationCount;
