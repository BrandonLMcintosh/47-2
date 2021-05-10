function sortedFrequency(arr, num) {
	const firstOccurrence = findFirstOccurrence(arr, num);
	const lastOccurrence = findLastOccurrence(arr, num);
	if (firstOccurrence === -1) return firstOccurrence;
	console.log(firstOccurrence, "************first*************");
	console.log(lastOccurrence, "**************last**************");
	const numZeros = lastOccurrence - firstOccurrence + 1;
	console.log(numZeros, "***********num*************");
	return numZeros;
}

const findFirstOccurrence = (arr, num, beg = 0, end = arr.length - 1) => {
	if (end >= beg) {
		const mid = beg + Math.floor((end + beg) / 2);
		if (mid === 0 || (arr[mid - 1] < num && arr[mid] === num)) {
			return mid;
		} else if (arr[mid] < num) {
			return findFirstOccurrence(arr, num, mid + 1, end);
		}
		return findFirstOccurrence(arr, num, beg, mid - 1);
	}
	return -1;
};

const findLastOccurrence = (arr, num, beg = 0, end = arr.length - 1) => {
	if (end >= beg) {
		const mid = beg + Math.floor((end - beg) / 2);
		if (
			mid === arr.length - 1 ||
			(arr[mid + 1] > num && arr[mid] === num)
		) {
			return mid;
		} else if (arr[mid] > num) {
			return findLastOccurrence(arr, num, beg, mid - 1);
		} else {
			return findLastOccurrence(arr, num, mid + 1, end);
		}
	}
	return -1;
};
module.exports = sortedFrequency;
