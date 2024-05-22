console.log("hello ");


function fun(){
    console.log("i am in fun()");
    console.log(x);// X is in TDZ bcz it is declare using let and above the declaration line it has temporal dead zone   
    let x=10;
}
fun();


