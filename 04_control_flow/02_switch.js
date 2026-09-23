//syntax of the switch statement

// switch(key){
// case value:
//   break;
//   default:
//     break;
// }

const month=3
switch(month){
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;//if we dont use the break keyword it will run the next line of code also except the default keyword code
  case 4:
    console.log("april");
    break;

    default:
      console.log("default case match");
    
}

const months="march"
switch(months){
  case "jan":
    console.log("january");
    break;
  case "feb":
    console.log("february");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

    default:
      console.log("default case match");
      
}










