
function createAsyncPromise(){
   return  new Promise((res,rej)=>{
      
        const value=Math.random();
        if(value<0.5){
          res(value);
        }
        else{
            rej(value);
        }

      
    })
}
 const response=createAsyncPromise();
 console.log("promise:",response);
 for(let i=0;i<=1000000000;i++){

 };
 console.log("promise:",response);