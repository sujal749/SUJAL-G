/**do-while*/
let i = 1;
do{
    console.log(i);
    i++
} while(i<=5);
/**while loop */

 i = 1;
 while(i<=5){
    //conditional
    //break(if infinite)
    //continue
    console.log(i);
    i++
 }
/**for loop*/
 for(let i = 1 ; i<=5;i++){
    console.log (i)
 }

 i = 1;
 for(;;){
    if(i>5){
        break;
 }
 console.log(i)
 i++
}

for (let a = 5; a>=1;a--){
    let toPrint =""
    for(let b = 1 ;b<=a;b++){
        toPrint +="*   "
    }
    console.log(toPrint)
}

//homework
//print the following pattern
/**
   *    *   *    *    *
   *                  *
   *                  *
   *                  *
   *    *    *    *   *
   * 
   * 
   * 
   * 
   * 
 */

