

// const tinderuser = new Object()//singleton object
const tinderuser = {} //non singleton object

tinderuser.id = "123abc"
tinderuser.name = "ram"
tinderuser.isLoggedin = false


// console.log(tinderuser);

const regularuser = {
    email:"some@gmail.com",
    fullname :{
        userfullname:{
            firstname:"shristi",
            lastname:"nepali"
        }
    }
}

// console.log(regularuser.fullname.userfullname);

const obj1 ={ 1:"a",2:"b"}
const obj2 ={ 3:"a",4:"b"}

//  const obj3 = Object.assign( {},obj1,obj2)

const obj3 = {...obj1,...obj2}
//  console.log(obj3);

 const users = [
    {
        id:1,
        email:"h@gmail.com"
    }
 ]

users[0].email
 console.log(tinderuser);
 
 console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

 console.log(tinderuser.hasOwnProperty('isLoggedin'));
 
