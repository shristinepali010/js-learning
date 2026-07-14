const myobject = {
     js: 'javascript',
     cpp: 'c++',
     rb: "ruby",
     swift: "swift by apple"

}

for (const key in myobject) {
    // console.log(myobject[key]);
    console.log(`${key} shortcut is for ${myobject[key]}` );
    
    
    
}

//for in loop for array

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
     
}