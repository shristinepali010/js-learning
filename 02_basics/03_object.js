//singleton


//object literals


const mysym = Symbol("key1")


const jsuser = {
    name: "shristi",
    "full name":"shristi nepali",
    [mysym]:"mykey1",
    age:30,
    location:"butwal",
    email:"shristi@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["monday","saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log( jsuser[mysym]);

jsuser.email = "shristichatgpt.com"
// Object.freeze(jsuser)
jsuser.email ="shristimicrosoft.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
    
}
jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());



