//reduce method

const myNums = [1,2,3]

//  const mytotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
//  },0)

const mytotal = myNums.reduce((acc,currval) => acc + currval,0)
 console.log(mytotal);


const shoppingcard = [
    {
        itemname:"js course",
        price:999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"data  science course",
        price:12999
    }
]
 
 const pricetopay = shoppingcard.reduce((acc,item) =>  acc + item.price,0)

 console.log(pricetopay);
 