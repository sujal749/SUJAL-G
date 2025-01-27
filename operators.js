/**
 * Arithematic  Operators
 * +,-,*,/,%
 *  Assignment Operators
 * =,-=,+=,*=,/=,%=
 * String (Concatination Operator)
 * +
 * Comparision Operator(Boolean)
 * <,>,<=,>=,==,!=,===
 * Logical Operator
 * &&,||,!
 * Conditional or Ternary Operators
 * -Single line if-Else Statement
 * (exp)?truecode:false code
 * 
 */
let a = 10;
let b = 3;
let c = a%b;
console.log(c);

// a++ =>a=a+1
//++a =>a=a+1

a++
console.log(a);
++a
console.log(a);
a
console.log(a);
console.log("");//new line
console.log(a++);//output :12, post assign 
                //output :13
console.log(++a);// output : 14 //pre assign

let d = 1;
d+=2;
d=d+2;

let e = 10;
let f = "10";
let g = e+f;
console.log("The value of g is", g);
console.log(e<f);//false dinxa =>value only
console.log(e==f);//true dinxa =>value only
console.log(e!=f);//false
console.log(e===f);//false=>value and data types
console.log(e!==f);//true =>value and data types

console.log(e<=f)&&(e>f)//if all true then only true or false true && false => false
console.log(e<=f)||(e>f)//if one true true if one false false true || false => True
console.log(!((e<=f)&&(e>f)))//!(true&&false)=>!(false)=>True

let day = "Friday";
//day => Friday => Weekend
//Not a Weekand 
//if else
// (day==='Friday')?console.log("Weekand"):console.log("Not a weekand")

console.log((day==='Friday')?"weekand":"not a Weekand");

let numb = day??"Default value";

//Object Destructures
    let user = {
        name:"Sujal g",
        email:"sujalhhimire@gmail.com",
        address:"Baneshower",
        phone:1234567
    }

    // let name = user.name;
    // let phoneNo = user.phone;
    // let email = user.email;
    let{name,email,phone:phoneNo}=user;
    console.log(name);
    console.log(email);
    console.log(phoneNo);

    let userrr2 ={
        name:"suroz",
        email:"suroz@gmail.com",
        phone1:"09877577",
        address:"chysal"
    }
    let{name1,email:mail,phone1:phoneNo1,address:location}=userrr2;
    console.log(name1);
    console.log(phoneNo1);
    console.log(location);

    //spread operator
    //array and object

    let ext1 = ['jpg','png','jpeg','gif'];
    let ext2 = ['pdf','ppt','doc','docx'];

    let exts = [...ext1,...ext2];

    let user1 = {
        Name:"sujal",
        email:"sujalhhimire@gmail.com"

    }
    
    let user2= {...user1}

    user2.name = "ghimire sujal";
    console.log (user1)
    let Student = {
        ...user1,
        phone:1234567,
    }

    console.log(Student)

    //Task(ii)

    // Look into control statements
    //     I)If-else
    //     II)else-If
    //     III)switch case
    //     Iv)loop
    //     v)while,do-while,for,for-in,for-off