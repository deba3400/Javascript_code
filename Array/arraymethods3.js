// const numbers = [1, -2, 3, -4, 5];
// const positives = numbers.filter(n => n < 0);
// console.log(positives);

// console.log(numbers);


// const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const result = arrays.map(arr => arr.filter(num => num % 2 === 0));
// console.log(result);

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num, index) => {
// if (index % 2 === 0) sum += num;
// });
// console.log(sum);



// const arrayLike = { length: 5 };
// const newArray = Array.from(arrayLike, (v, i) => i);
// console.log(newArray);


const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((acc, curr) => {
if (curr % 2 === 0) {
acc.even.push(curr);
} else {
acc.odd.push(curr);
}
return acc;
}, { odd: [], even: [] });
console.log(result);