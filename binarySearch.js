function binarySearch(arr,x){
    let n=arr.length;
    let low=0,high=n-1;
    while(low<=high){
        let mid=low+Math.floor(high-low)/2;
        if(arr[mid]==x){
            return arr[mid];
        }
        else if(arr[mid]<x){
            low=mid+1;

        }
        else{
            high=mid-1;
        }
    }
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]>=x){
            return i;
        }
    }
    return arr.length;
}
let arr=[1,2,2,4,5]
let x=7;
let result=binarySearch(arr,x);
console.log(result);
