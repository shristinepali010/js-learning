//premitive

//7
//string 
//num
//boolean
//null
//undefine
//bigInt
//symbol used when make the value is unique

const id = Symbol('123')
const anotherId =  Symbol('123')
console.log(id === anotherId);

const bigNumber = 8959n




// non primitive(reference)
//arrays
//object//function

const heros =["sakatiman","naagarj","ram"];
let myObj = {
    name: "shristi",
    age:20,
}

const myFuntion = function(){
    console.log("hello world!");
    
}
console.log(typeof myFuntion  );




//memory

//stack (primitive),heap (non- primitive)
let myYoutubename ="shristi.js"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log( anothername );
console.log( myYoutubename );

let user = {
    email: "user@gmail.com",
    upi: "chaiaurcode"
}

let user2 = user

user2.email = "shristi@gmail.com"
 console.log(user.email);
 console.log(shristi.email);

 