
// Pure Function
//A function which always returns the same output for the same input parameter is called pure function.

const add=(num1,num2)=>{
    return num1+num2;
}

const addition1= add(10,20);
const addition2= add(10,20);
const addition3= add(20,20);
const addition4= add(20,20);

console.log(addition1, addition2, addition3, addition4 )


// Impure function
//A function which may return different values for the same input parameters is called impure function.

let totalAmount=0;
const f=(increment)=>{

    return totalAmount+=increment;
}


const amount1=f(50);
const amount2=f(50);
console.log(amount1, amount2)