let num = [1,2,3,4,5,6,7,8,9,10]
let sum = 0;
// for (let i = 0 ; i<num.length;i++){
//     sum += num[i]
// }
// for ( let i in num){
//     sum +=num[i]
// }
// console.log(sum)

for ( let x of num){
    sum += x 
}
console.log(sum)