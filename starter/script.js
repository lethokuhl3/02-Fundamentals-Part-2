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









