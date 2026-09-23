const userEmail="hitesh.ai"
if(userEmail){
  console.log("got user email");
}else{
  console.log("dont have user email");
  
}

const usersEmail=""//consider false
if(usersEmail){
  console.log("got user email");
}else{
  console.log("dont have user email");
  
}

const usersEmails=[]
if(usersEmails){
  console.log("got user email");
}else{
  console.log("dont have user email");
  
}

//falsy value

//false,0,-0,BigInt 0NaN,"",null,undefined,NaN

//truthy value

//"0" , 'false' , " ",[],{},function(){} 

if(usersEmails.length=== 0){
  console.log("array is empty");

}

const emptObj={}
if(Object.keys(emptObj).length==0){
console.log("object is empty");

}

//false == 0 true
//false =="" true
//0 == '' true

//Nullish coalescing operator (??): null undefined
let val1
// val1=5 ?? 10  op-5
// val1=null ?? 10   op-10
// val1=undefined ?? 15   op-15
// val1=null ?? 10 ?? 20    op-10
console.log(val1);

//ternary operator
//condition  ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")


