function f1(){

console.log("inside f1");

}

function f2(){
console.log("inside f2")
return f1();


}

function f3(){
    console.log("inside f3")
    f2();
    return 3+4;

}

function f4(){
  console.log("inside f4");
  const x=f3();
  return x;
}

console.log(f4())