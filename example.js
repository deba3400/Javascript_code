
/*
let x=3.56;
let y=9.00001;
console.log(Math.floor(y));
console.log(Math.round(x));
*/
let pattern="";
for( let i=1;i<10;i++){
    for( let j=1;j<=i;j++)
    {
        // console.log(j);
        // process.stdout.write(j)
        pattern += i;

    }
    pattern +="\n";
    
}
console.log(pattern);