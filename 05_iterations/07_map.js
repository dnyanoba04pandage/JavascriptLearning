const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNum=myNum.map((num)=>{
// return num+10
// })
// console.log(newNum)

// const value=myNum.map((res)=>{
// return res+10
// })

// console.log(value);


//chaining
const news=myNum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)

console.log(news);


