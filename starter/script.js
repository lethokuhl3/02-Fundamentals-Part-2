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

  /*
// Coding Challenge #1
// Data 1: Dolphins vs Koalas

const calcAverage = (a, b, c) => (a + b + c) / 3;
const dolphinScore = calcAverage(44, 23, 71);
const koalasScore = calcAverage(65, 54, 49);


console.log(dolphinScore, koalasScore);


const checkWinner = function(avgDolphin, avgKoalas) {
  if(avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphin} vs ${avgKoalas})`);
  }else if(avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphin})`);
  }else {
    console.log(`No team wins`);
  }
}

// Data 2: Dolphins vs Koalas

const dolphinScore2 = calcAverage(85, 54, 41);
const koalasScore2 = calcAverage(23, 34, 27);

console.log(dolphinScore2, koalasScore2);

// checkWinner(dolphinScore, koalasScore);
checkWinner(dolphinScore2, koalasScore2);
*/

/*
// introduction to Arrays

const friend1 = 'Lethokuhle';
const friend2 = 'Thando';
const friend3 = 'Thabiso';

const friends = ['Lethokuhle', 'Thando', 'Thabiso'];
console.log(friends);

const y = new Array(1991, 1992, 1993, 1994);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);// Length of the array
console.log(friends[friends.length - 1]); // Accessing the last element in the array

friends[2] = 'Simingaye'; // Changing the value of the third element in the array
console.log(friends);

const firstName = 'Lethokuhle';
const lethokuhle = [firstName, 'Mabaso', 2025 - 2002, 'Software developer', friends];
console.log(lethokuhle);
console.log(lethokuhle.length);

// Exercise: Array Methods

  const calcAge = function(birthYear) {
    return 2037 - birthYear;
  }

  const years = [1990, 1967, 2002, 2010, 2018];
  const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];// Using the last element in the array to calculate the age
  console.log(ages);

  */

  /*
  // Basic Array Operations (Methods)

  //add elements to an array
  const friends = ['Lethokuhle', 'Thando', 'Thabiso'];
  const newLength = friends.push('Simingaye'); // Add a new element to the end of the array
  console.log(newLength); // Output the new length of the array
  console.log(friends);

  const newFriend = friends.unshift('Sizwe'); // Add a new element to the beginning of the array
  console.log(newFriend); // Output the new length of the array
  console.log(friends);

  //remove elements from an array

  friends.pop(); // Remove the last element from the array
  friends.pop(); // Remove the last element again
  console.log(friends);

  const popped = friends.shift(); // Remove the first element from the array
  console.log(popped); // Output the removed element
  console.log(friends);


  console.log(friends.indexOf('Thando')); // Find the index of 'Thando' in the array
  console.log(friends.indexOf('Bob')); // Find the index of 'Bob' in the array (not present, so returns -1)

  // Check if an element exists in the array
  console.log(friends.includes('Thando')); // Check if 'Thando' is in the array (returns true)
  console.log(friends.includes('Bob')); // Check if 'Bob' is in the array (returns false)


  if(friends.includes('Thando')) {
    console.log('You have a friend called Thando');
  }
    */
   
  




 




  









