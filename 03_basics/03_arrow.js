const user = {
    username: "shristi",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this);
        
        
    }
}
// user.welcomemessage()
// user.username = "ram"

// user.welcomemessage()


// console.log(this);


// function chai(){
//     let username = "shristi"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "shristi"
//     console.log(this.username);
    
// }
// chai()


const chai = () => {
    let username = "shristi"
    console.log(this);
    
}
chai()


// const add = (num1,num2) => {
//    return num1+num2
// }

//implicit return
// const add = (num1,num2) =>  num1+num2


// const add = (num1,num2) =>  (num1+num2)

const add = (num1,num2) => ( {username: "shristi"}) 

// console.log(add(5,3));


// const myarray = [2,3,5,6,7]

// myarray.forEach() 
