/**
 *      *
 *      * *
 *      * * *
 *      * * * *
 *      * * * * *
 */
let TotalNoOfRow=5
for(let i=1;i<=TotalNoOfRow;i++){
    for(let j=1;j<=i;j++){
    process.stdout.write("*");
    
    }
    console.log();
}



/**
 *   * * * * *
 *   * * * * *
*    * * * * *
     * * * * *
     * * * * *
 * 
 */

console.log("_________________________________")

for(let i=0;i<TotalNoOfRow;i++){
    for(let j=0;j<TotalNoOfRow;j++){
        process.stdout.write("*");

    }
    console.log();
}

/**
 *   * * * * *
 *   * * * *
 *   * * *
 *   * *
 *   *
 */

console.log("--------------------------");


for(let i=0;i<TotalNoOfRow;i++){
    for(let j=0;j<TotalNoOfRow-i;j++){
          process.stdout.write("*");
    }
    console.log();
}

/**
 * 
 *        *
 *       * *
 *     *  *  *
 *    *  *  *  *
 *   *  *  *  *  *
 */     



console.log("----------------------------")

for(let i=0;i<TotalNoOfRow;i++){
    for(let j=0;j<TotalNoOfRow-i-1;j++){
        process.stdout.write(" ");
    }
    for(let k=0;k<=i;k++){
        process.stdout.write(" *");
    }
    console.log();
        
}