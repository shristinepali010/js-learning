const userEmail = []

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't got user email");
    
}

//falsy values

// flase,0 ,-0,BigInt 0n ,"",undefined,null,NaN

//truthy values

//"0",'false'," ",[],{},function(){},


// if(userEmail.length === 0){
//     console.log("array is empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}


// Nullish coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 15 ?? undefined
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary operation 

//condition ? true output : false output

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

