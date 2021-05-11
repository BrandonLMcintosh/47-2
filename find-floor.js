function findFloor(arr, num, beg = 0, end = arr.length - 1) {
	if (beg > end) return -1;
	if (num >= arr[end]) return arr[end];
	const mid = Math.floor((beg + end) / 2);
	if (arr[mid] === num) return arr[mid];
	if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) return arr[mid - 1];
	if (num < arr[mid]) return findFloor(arr, num, beg, mid - 1);
	return findFloor(arr, num, mid + 1, end);
}

module.exports = findFloor;
