//array

const myArr=[0,1,2,3,4,5]
// const myHeros=["shaktiman","naagraj"]

// const myArr2=new Array(1,2,3,4)

// console.log(myArr[1])

//array mmethods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)//add element value at start of the array
// myArr.shift()//remove the value from start

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr=myArr.join()//convert array into string

// console.log(myArr)
// console.log(newArr);

//slice and splice


console.log("A",myArr)

const myn1=myArr.slice(1,3)//does not make any original array

console.log(myn1)
console.log("b",myArr)

const myn2=myArr.splice(1,3)//make changes in the original array
console.log("c", myArr)
console.log(myn2)
