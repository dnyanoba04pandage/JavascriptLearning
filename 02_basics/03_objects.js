//singleton 
//Object.create




//object literals
const mySym=Symbol("Key1")

const JsUser={
name:"hitesh",
"full name":"hitesh chowdhary",
[mySym]:"myKey1",
age:23,
location:"jaipur",
email:"hitesh@google.com",
isLoggedIn:false,
lastLoginDays:["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( typeof JsUser[mySym]);

// JsUser.email="hitesh@cgatgpt.com"
// Object.freeze(JsUser)

// JsUser.email="hitesh@microsoft.com"
// console.log(JsUser)


JsUser.greeting=function(){
  console.log("hello js user")
}

console.log(JsUser.greeting())

JsUser.greetingTwo=function(){
  console.log(`hello js user , ${this.name}`)
}

console.log(JsUser.greetingTwo())












