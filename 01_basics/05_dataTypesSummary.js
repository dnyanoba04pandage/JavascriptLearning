// primitive data type

// 7 types : String ,Number,Boolean,null,undefined ,Symbol,BigInt 

const score=100
const scoreValue=100.3
//js is a dynamically typed language

const isloggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId)

//const bigNumber=2345568776n


//Reference (Non primitive)

//Array , Objects, Functions

const heros=["shaktiman","naagraj","doga"]


let myObj={
  name:"hitesh",
  age:22,
}


const myFunction=function(){
  console.log("hello world")
}


console.log(typeof bigNumber)//undefined
console.log(typeof myFunction )//function
console.log(typeof myObj )//object
console.log(typeof heros)//object
console.log(typeof score )//number
console.log(typeof scoreValue )//number
console.log(typeof isloggedIn )//boolean
console.log(typeof outsideTemp )//object
console.log(typeof userEmail )//undefined




// Stack (Primitive),Heap (Non-primitive)

let myYoutubename="hiteshchoudharidotcom"

let anotherName=myYoutubename
anotherName="chaiaurcode"

console.log(myYoutubename)
console.log(anotherName)

let userOne={
  email:"user@google.com",
  upi:"use@ybl"
}

let userTwo=userOne
userTwo.email="hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)
