let x=10;
function fun(){
    console.log(x);// this is not a TDZ for x bcz X is globaly declare
    let x=20;
}
fun();