const numbers = [1, 2, 3, 4, 5];
let sumOdd = 0;
numbers.forEach(num => {
    if (num % 2 !== 0) {
        sumOdd += num;
    }
});
console.log(sumOdd);