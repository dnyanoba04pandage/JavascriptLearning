const user={
  username:"dnyanoba",
  logicCount:8,
  signedIn:true,

  getUserDetails:function(){
    console.log("got user details from database");
    console.log(`username: ${this.username}`);
    console.log(this);//this is a current context in this we can access all the key values in the object . it referes to the current context of the object. 
  }
}

console.log(user.username);
console.log(user.getUserDetails());
//console.log(this) it gives a empty object because it is define in the global context and on node mostly return empty object


//constructor function

//const promiseOne=new promise();

function user(username,logincount,islogedin){
  this.username=username;
  this.logincount=logincount;
  this.islogedin=islogedin;
//if we dont return this then also we can also access the values of the function.

  this.gretting=function(){
    console.log(`welcome ${this.username}`);
  }
    return this;
}

const userone=new user("dnyanoba",8,true);//it creates a new spcae or instace in the memory and refere userone and usertwo differently.

//without new keyword it will not create a new instance and it will refer to the same object in the memory and it will override the values of the previous object.
const usertwo=new user("hitesh",10,false);

console.log(userone.constructor);
console.log(usertwo);

//new create an empty object and then it will refer to the function and then it will return the object.

//see what is instanceof operator
console.log(userone instanceof user);//true
console.log(usertwo instanceof user);//true