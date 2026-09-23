// const myobj={
//   js:'javascript',
//   cpp:'c++',
//   rb:'ruby',
//   swift:'swift by apple'
// }

// for(const key in myobj){
//   console.log(`${key} shortcut is for ${myobj[key]}`);
  
// }

// const programming=["js","rb","py","java","cpp"]
// for(const key in programming){
//   console.log(programming[key]);//gives keys of array in for in loop ----- in the for of loop it gives values directly
  
// }


 const map=new Map()
 map.set('IN',"India")
 map.set('USA',"United states of america")
 map.set('Fr',"France")
 map.set('IN',"India")

 for (const key in map) {//map is not an iterable
  
  console.log(key);
  
  
 }