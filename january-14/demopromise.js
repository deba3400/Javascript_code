
function createPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=> res("debashis"),600);
    }
    )
}


pr=createPromise();
p1=pr.then(f1,f2);
p2=p1.then(f2, f3);
p3=p2.then(f3 ,f4);

// code 2

pr=createPromise();
pr
 .then (f1 ,f2)
.then(f2,f3)
.then(f3,f4);

// this two code are doing same thing