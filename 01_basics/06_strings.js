const  name="hitesh"
const repoCount=50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('hitesh-hc-com')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf(`t`));


const newString=gameName.substring(0,4)//we can not give negative index
console.log(newString)

const anotherString=gameName.slice(-8,4)//negative index is allowed here
console.log(anotherString)

const newstringOne="  hitesh  "
console.log(newstringOne)
console.log(newstringOne.trim())


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))




