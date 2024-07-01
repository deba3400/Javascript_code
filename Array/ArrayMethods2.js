// foreach , map , filter, every methods




const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);


const result1=numbers.map((num)=>{
    console.log(num);

})
console.log(result1)



// const items = [
//     { name: 'Apple', type: 'fruit' },
//     { name: 'Monitor', type: 'electronic' },
//     { name: 'Orange', type: 'fruit' }
// ];
// const fruitNames = items.filter(item => item.type === 'fruit').map(item => item.name);
// console.log(fruitNames);





// const numbers1 = [1, 2, 3, 4, 5];
// let sumOdd = 0;
// numbers1.forEach(num => {
//     if (num % 2 !== 0) {
//         sumOdd += num;
//     }
// });
// console.log(sumOdd); // 



// const arr = [1,400,5,6,9]
// const result = arr.every((element) => {
//    console.log(element);
//    return element < 100;
// });


// // some methods

// const arr3=[1,3,7,9];
// const even =(element)=>element%2==0;
// console.log(arr3.some(even));

