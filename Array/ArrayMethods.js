let arr=[1,2,3,4,5,6];
// unshift:  add a new element to the start of array

console.log(arr);
arr.unshift(10);
console.log(arr);

// push : add at end of the array

arr.push(20);
console.log(arr);

//pop : remove element from end with index

arr.pop();
console.log(arr);

// delete : delete only element not space

// delete arr[2];
console.log(arr);

// shift : remove from start

arr.shift();
console.log(arr);

// slice : it reterns a copy of array according to passing arguments
let arr1=[1,2,3,4,5,6,7];
console.log(arr1.slice(1,4));// argument's end index is excluding
console.log(arr1);

// splice : it returns actual array part what ever part is fetch by splice that will be delete from actual array

let result =arr1.splice(1,4);// including  arguments's end index 
console.log(result);
console.log(arr1);


// reverse: reverse all the element of array

let arr2=[1,2,3,4,5,6,7];
arr2.reverse();
console.log(arr2);