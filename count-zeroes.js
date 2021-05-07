function countZeroes(arr) {
	const firstZero = findFirstZero(arr);
	if (firstZero === -1) return 0;
	const numZeros = arr.length - firstZero;
	return numZeros;
}

const findFirstZero = (arr, beg = 0, end = arr.length - 1) => {
	if (end >= beg) {
		const mid = beg + Math.floor((end - beg) / 2);
		if ((mid === 0 && arr[mid] === 0) || (arr[mid - 1] === 1 && arr[mid] === 0)) {
			return mid;
		} else if (arr[mid] === 1) {
			return findFirstZero(arr, mid + 1, end);
		}
		return findFirstZero(arr, beg, mid - 1);
	}
	return -1;
};

module.exports = countZeroes;
