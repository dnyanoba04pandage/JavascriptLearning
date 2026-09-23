//if

// const isUserLoggedIn=true
// if(isUserLoggedIn){
//   console.log("logged in")

// }

//<,>,<=,>=,==,!=,===,!==

// if(3!=2){
//   console.log("true");
  
// }


//dont check data type just value check
if(2=="2"){
  console.log("executed");
}

//it checks the value and data type both
if(2==="2"){
  console.log("executed triple equal");
}

// const temp=41
// if(temp===41){
//   console.log("less than 50");
// }
// else{
//   console.log("temp is greater than 50");
// }

// console.log("executed");


//scope concept;- global scope functional scope

// const score=200
// if(score>100){
//   const power="fly"
//   console.log(`user power ${power} `);
  
// }
  //console.log(`user power ${power} `); power var scope is functinal or block scope 


  //shortcut scope ex
 const balance=1000
// if(balance>500)  console.log("test"),
// console.log("test2")//implicit scope execute in one line

//multiple consitions check statement else if ladder
// if(balance<500){
//   console.log("less than ");

// }else if(balance<750){
//   console.log("less than 750");
  
// }else if(balance<900){
//   console.log("less than 900");
  
// }else{
//   console.log("less than 1200");
  
// }

// const userLoggedIn=true
// const debitCard=true
// const loggedInFromGoogle=false
// const loggedInFromEmail=true
// if(userLoggedIn && debitCard && 2==2){
//   console.log("allow to buy courses");
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//   console.log("user logged in");
  
// }