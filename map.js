// const arr = [2,3,1,4,5];

// const result = arr.map((element) => {
//     console.log("Element is", element);
//     return element * element;
// })

// console.log(result) // this is a new array
// console.log(arr)


const products = [{id: 1, name: 'iphone', price: 1000}, {id: 2, name: 'macbook', price: 2000}, {id: 3, name: 'airpods', price: 200}];

const modifiedProducts = products.map((product, idx) => {
    console.log(idx)
    return {productId: product.id, name: product.name};
});

console.log(modifiedProducts);