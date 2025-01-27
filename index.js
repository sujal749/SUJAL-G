console.log(`Hello world!`);
// Comment
/* Multiline comments*/
// Data
//Variables and Constants
// var 
// let 
// global
// naming- alpha-numeric,can only start from alphabet eg:abc 123 not 123 abc

// var fullName = " Sujal Ghimire ";
// // camel case 
// console.log(fullName);//SUjal ghimire
// fullName = "SUjal G";
// console.log(fullName) ;//SUjal G

let fullName = "Sujal Ghimire";
console.log(fullName);
fullName = "sujal G";
console.log(fullName);

// global scope
// block scope

// var name = "";
// var name = "Redeclare"; redeclare garna payo
// let nme = "sujal";
// let nme= "";//esto midaina redeclare garna

//GLOBAL scope example

var a = 10 ;
console.log(a);
{
    var a = 20 ;
    console.log(a);
}
console.log(a);

//BLOCK scope example

let b = 10 ;
console.log(b)
{
    let b =20 ;//block scope 
    b = 20 ; // yelle global scope lyayo
console.log(b)
}
console.log(b);
//{block}

// Constants

    const ADDRESS = "Kathmandu";
    //constant declare garne bela capital letter
    // const ADDRESS = "lalitpur"//compilation error
    // ADDRESS = "lalitpur"//runtime error
    console.log(ADDRESS);