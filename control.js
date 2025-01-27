/**
 * Control statement
 * Decision making statements
 * a. if else
 * b. else-if 
 * c. switch case
 * d. loop
 *  i.do-while
 * ii.while
 * iii.for 
 * iv.for-in
 * v.for-of
 */
//falsy
//false, null,undefined,empty variables,0,nan,empty string


//is-else
//nesting
// let day = "Friday";
// if(day === "Sunday"|| day === "Saturday"){
//     //anything
//     console.log("Holiday")
// }else{
//     //optional
//     if(day === "Friday"){
//         console.log("Weekand")
//     }else{
//         console.log("weekday")
//     }
// }
//     //False Expression
// let xyz = 0;
// if (xyz){

// }
// //optional
// else{
//     console.log("failed")
// }

//else if
// let day = "Friday"
// if (day === "sunday" || day === "saturday") {
//     console.log("holiday")
// } else if (day === "Friday") {
//     console.log("Weekand")
// } else {
//     console.log("weekday")
// }

// let unit = 350;
// let bill = 0;
// if (unit <= 20) {
//     bill = 80
// } else if (unit <= 40) {
//     bill = 80 + (units <= 40) * 5
// } else if (unit <= 70) {
//     bill = 80 + 20 * 5(unit - 40) * 7.5
// } else if (unit <= 120) {
//     bill = 80 + 20 * 5 + 30 * 7.5(unit - 70) * 12
// } else if (unit <= 170) {
//     bill = 80 + 20 * 5 + 30 * 7.5 + 50 * 12(unit - 120) * 15
// }
// else if (unit <= 170) {
//     bill = 80 + 20 * 5 + 30 * 7.5 + 50 * 12 + 50 * 15 + (unit - 170) * 20
// } else {
//     bill = 80 + 20 * 5 + 30 * 7.5 + 50 * 12 + 50 * 15 + 100 * 20 + (unit - 270) * 25
// }
// console.log(bill);

let fm = 500;
let am = 200;
let div = 200/500;
let per = div*100;

if (per >=80){
    console.log("distinction")
}else if(per>=60 ){
    console.log("first division")
}else if(per>=45){
    console.log("second division")
}else if(per>=32){
    console.log("first division")
}else{
    console.log("sorry")
}
//switch case
day = "Friday"
switch (day){
    case "Sunday":
    case"Saturday":
    console.log("holiday")
    break;

    case "Friday":
    console.log("weekand")
    break;

    default :
    console.log("weekday")
    break;//optional
}
