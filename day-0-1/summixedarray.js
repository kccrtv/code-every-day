// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x) {
	const parsedArr = x.map((num) => parseInt(num));
	let sum = 0;
	parsedArr.forEach((num) => {
		sum += num;
	});
	return sum;
}

// console.log(sumMix([9, 3, '7', '3']));
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));

// https://www.codewars.com/kata/57eaeb9578748ff92a000009/javascript
