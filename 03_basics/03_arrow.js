
//this keyword refere to the current context
// const user={
//   username:"hitesh",
//   price:999,
//   welcomeMessage:function(){
//     console.log(`${this.username}, welcome to website`)
//     console.log(this) print to current context
//   }
// }

 //user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

 //console.log(this)//this line code context refere to the global context


 
//this keyword context is not work in the function , work in the object
//  function chai(){
//   let username="hitesh"
//   console.log(this.username);
  
//  }
//  chai()




//arrow functions

// const chai=function(){
//   let username="hitesh"
//   console.log(this.username);
  
// }
// chai()


//  const chai=()=>{
//    let username="hitesh"
//   console.log(this.username);
//  }
//  chai()



// const addTwo=(num1,num2)=>{
// return num1+num2
// }

// console.log(addTwo(3,4))

//const addTwo=(num1,num2)=> num1+n
// um2
//console.log(addTwo(3,4))

// const addTwo=(num1,num2)=>( num1+num2)

// console.log(addTwo(3,4))


//to return the object
const addTwo=(num1,num2)=>({username:"hitesh"})
console.log(addTwo(3,4))


const myarray=[2,5,6,7,8]

//myarray.forEach()