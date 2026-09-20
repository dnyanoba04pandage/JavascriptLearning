//immediately invoked function expression (iife)  we use to avoid the global scope inteference inside the function

(function chai(){
  //named iife
  console.log('db connected')
})();

( (name)=>{
  //unnamed iife
  console.log(`db connected ${name}`)
})('hitesh')