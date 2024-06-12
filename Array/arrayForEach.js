
// foreach methods of array

let arr=[1,2,3,4,5,6];
arr.forEach((element, idx)=>{// foreach methods expect callback function as argument first parameter of callback is element of array and second is index 
    console.log(`element at ${idx} is ${element}`);
})

console.log("**********************")

// create your own foreach methods

function customForEach(arr, cb){
    for(let i=0;i<arr.length;i++){
        cb(arr[i],i);
    }

}
customForEach([1,2,3,4,5,6],(element , idx)=>{
    console.log(`element at ${idx} is ${element}`)
})
