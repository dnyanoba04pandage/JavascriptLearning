function multipleBy5(num){
    return num * 5;
}

multipleBy5.power=2
console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

function createUser(username,score){
  this.username=username;
  this.score=score;
}

createUser.prototype.increment=function(){
  this.score++;
  console.log(this.score);
}

createUser.prototype.printMe=function(){
  console.log(`score: ${this.score} `);
}

const chai=new createUser("chai",8);
const tea=new createUser("tea",10);
//new keyword creates a new object and then it will refer to the function and then it will return the object. so chai and tea are two different objects in the memory and they have their own properties and methods.


//The `new` keyword creates a new object. It sets the object's prototype to `createUser.prototype` and calls the `createUser` function with `this` referring to the newly created object. The constructor initializes the object's properties, and the new object is returned automatically.

//Therefore, `chai` and `tea` are two different objects in memory. Each object has its own `username` and `score` properties, while both objects can share the `increment()` and `printMe()` methods through the prototype.
chai.printMe();
chai.increment();

tea.printMe();
tea.increment();



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/