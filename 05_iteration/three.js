// for of  loop

// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "hello world"

for(const greet of greeting){
    // console.log(`each char is ${greet}`);
    
}


//maps

const map = new Map()
 map.set('IN',"india")
map.set('USA',"united states of america")
map.set('Fr',"france")
//  map.set('IN',"india")

// console.log(map);


for(const [key,value] of map){
    console.log(key, ':-', value);
    
}


const myobject ={
    'game1': "NFS",
    'game2': "spiderman"
}
for (const [key,value] of myobject) {
    console.log(key ,':-',value);
    
}