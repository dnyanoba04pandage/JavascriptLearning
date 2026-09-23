const myNum=[1,2,3]

// const myTotal=myNum.reduce(function (acc,currval){
//   console.log(`acc: ${acc} and currval : ${currval}`);
  
//   return acc + currval
// },0)


const myTotal=myNum.reduce((acc,currval)=> acc+currval,0)
console.log(myTotal);

const shoppingCard =[
  {
    itemName:"js course",
    price:2999
  },
   {
    itemName:"ai course",
    price:9999
  },
   {
    itemName:"mobile course",
    price:4999
  },
   {
    itemName:"ds course",
    price:12999
  },
]


const price=shoppingCard.reduce((acc,item)=>acc+ item.price , 0)

console.log(price);
