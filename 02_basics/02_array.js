const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

//  const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

//spread operator(...)
const all_new_heros = [...marvel_heros,...dc_heros]

console.log(all_new_heros);


const another_array = [1,2,3 ,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("shristi"));
console.log(Array.from({name:"shristi"}));//intresting

let score1 = 100
let score2 = 200
let score3 = 300
let score4= 400

console.log(Array.of(score1,score2,score3,score4));

