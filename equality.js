
console.log(Number.MAX_VALUE);// +infinity
console.log(Number.MIN_VALUE);// -infinity

var x=13;
console.log(x.toString())
console.log(x.toString(2));


// to convert a binery to decimal
// we have a function parseInt 

console.log(parseInt("1101",2));
console.log(parseInt("15",8));


// presicion of a number
const num=10.738356;
console.log(num.toPrecision(5));// give you the presicion including pre decimal number
console.log(num.toFixed(4));// gives you the presicion only in decimal number

// zero
const zero=0;
const pos_zero= +0;
const neg_zero = -0;
console.log(zero, pos_zero, neg_zero);

console.log(zero==neg_zero);
console.log(zero===pos_zero);

