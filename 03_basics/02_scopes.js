// let a = 10
// const b = 20
// var c = 30


// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER:",a);
    
// }

//curly braces{}=> scope

// console.log(a);
// console.log(b);
// console.log(c);

//hoisting
// nested scope
function one(){
    const username = "shristi"
    
    function two(){
        const website = " youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}
// one()


if(true){
    const username = "shristi"
    if(username === "shristi"){
        const website = " youtube"
        // console.log(username + website);
    
        
    }
    // console.log(website);

     
}
// console.log(username);


//++++intresting+++
 console.log (addone(5));
function addone(num){
  return num + 1
}


console.log(addtwo(5));
const addtwo = function(num){
    return num + 2
}
