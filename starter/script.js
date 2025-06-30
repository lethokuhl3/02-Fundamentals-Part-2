'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; // 'interface' is a reserved keyword in JavaScript, so it cannot be used as an identifier.
// const private = 534; // 'private' is also a reserved keyword, so it cannot be used as an identifier.
// const if = 23; // 'if' is a reserved keyword, so it cannot be used as an identifier.
*/

/*
function logger() {
  console.log("My name is letho")
}
// Calling / Running / Invoking the function
logger();



function fruitProcessor(apples, Oranges) {
  const juice = `juice with ${apples} apples and ${Oranges} oranges`;
  return juice;
}

 const appleJuice = fruitProcessor(5, 0);
 console.log(appleJuice);

 const appleOrangeJuice = fruitProcessor(2, 4);
 console.log(appleOrangeJuice);

 const num = Number('23');

 */

 /*
 // Function Declaration vs Function Expression

 // Function Declaration

 function calcAge1(birthYear) {
   return  2023 - birthYear;
 }
   const age1 = calcAge1(1991);


  // Function Expression

  const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
  }

  const age2 = calcAge2(1991);
  console.log(age1, age2);
  */

  /*
  // Arrow Functions

  const calcAge3 = birthYear => 2023 - birthYear;
  const age3 = calcAge3(1991); 
  console.log(age3);

  const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
  }

  console.log(yearsUntilRetirement(1991, 'Letho'));
  console.log(yearsUntilRetirement(1980, 'John'));
  */

  /*
  // Functions Calling Other Functions

  function cutFruitPieces(fruit) {
    return fruit * 4; // Assuming each fruit is cut into 4 pieces
  } 

  function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
  }
  console.log(fruitProcessor(2, 3));

  */

  /*
  // Reviewing Functions

  const calcAge = function(birthYear) {
    return 2037 - birthYear;
  }

  const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
        return retirement; 
    }else{
      console.log(`${firstName} has already retired.`);
      return -1;
       // If the person has already retired, return -1
    }
    // return 
  }

  console.log(yearsUntilRetirement(1991, 'Letho'));
  console.log(yearsUntilRetirement(1970, 'John'));

  */

  

  









