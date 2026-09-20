function sayMyName(){
  console.log("h")
   console.log("i")
    console.log("t")
    console.log("e")
     console.log("s")
      console.log("h")
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//   console.log(number1+number2);
  
// }
// const result=addTwoNumbers(3,5)//arguments

// console.log(result);



function addTwoNumbers(number1,number2){
  // let result=number1+number2
  // return result
  //console.log("hitesh")//does not execute this line
  return number1+number2
  
}

const result=addTwoNumbers(3,5)//arguments

//console.log(result);

function loginUserMessage(username="sam"){
  if(!username){
    console.log("please enter a username")
    return

  }
  

  return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))

// console.log(loginUserMessage())

///...num1  -> rest operator or spread operator ,, sending multiple parameter to the function definition 
function calculateCartprice(...num1){
  return num1
}
console.log(calculateCartprice(200,400,600,2000));


//sending object as a parameter to the function

const user={
  username:"hitesh",
  price:199
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  
}

//handleObject(user)
handleObject({
  username:"sam",
  price:199
})

//sending array as a parameter to the function
const myNewArray=[200,400,100,600]
function returnSecondValue(getarray){
  return getarray[1]
}

//console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,400,100,10000]))