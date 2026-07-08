function sayMyName(){
    console.log("H");
    
}
// sayMyName()

// function addTwoNumber(num1,num2){
// console.log(num1 + num2);

// }
function addTwoNumber(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2

}

 const result = addTwoNumber(3,5)

//  console.log("result:",result);
 
function loginUserMessage(username = "ram"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`

}
//  console.log(loginUserMessage("shristi"));
//   console.log(loginUserMessage("hari"));


function calculateCartprice(...num1){
    return num1

}
console.log(calculateCartprice(200,400,500));


const user ={
    username: "shristi",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"ram",
    price: 399
})

const mynewarray = [200,400,600]

function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(mynewarray));
