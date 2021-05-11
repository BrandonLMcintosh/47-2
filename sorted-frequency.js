function sortedFrequency(arr, num) {
	const firstOccurrence = findFirstOccurrence(arr, num);
	const LastOccurrence = findLastOccurrence(arr, num);
	if (firstOccurrence === -1) return 0;
	const numTimes = LastOccurrence - firstOccurrence;
	return numTimes;
}

const findFirstOccurrence = (arr, num, beg = 0, end = arr.length - 1) => {
	if (end >= beg) {
		const mid = beg + Math.floor((end - beg) / 2);
		if ((mid === 0 && arr[mid] === num) || (arr[mid - 1] !== num && arr[mid] === num)) {
			return mid;
		} else if (arr[mid] !== num) {
			return findFirstOccurrence(arr, num, mid + 1, end);
		}
		return findFirstOccurrence(arr, num, beg, mid - 1);
	}
	return -1;
};

const findLastOccurrence = (arr, num, beg = 0, end = arr.length - 1) => {
	if (end >= beg) {
		const mid = beg + Math.floor((end - beg) / 2);
		if ((mid === 0 && arr[mid] === num) || (arr[mid - 1] !== num && arr[mid] === num)) {
			return mid;
		} else if (arr[mid] !== num) {
			return findFirstOccurrence(arr, num, mid + 1, end);
		}
		return findFirstOccurrence(arr, num, beg, mid - 1);
	}
	return -1;
};
module.exports = sortedFrequency;
