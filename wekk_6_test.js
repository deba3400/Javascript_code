for(i=0;i<100;i++){
    //some thing 
}
for(i=0;i<100;i++){
    //something
}
console.log("Timer 1 is start");
setTimeout(()=>{
console.log("Timer 1 is done")}

,10000);
console.log("Timer 2 is start");
setTimeout(()=>{
console.log("Timer 2 is done")}

,0);
console.log("timer 3 is start");
setTimeout(()=>{
console.log("timer 3 is done")},100);

