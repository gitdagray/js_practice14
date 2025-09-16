/* Practice Assignment 14:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create a function named "justEmails".
// The function should accept a
// parameter for JSON data
// named "data".
// The function should loop
// through the JSON user data
// with forEach().
// Using the push method, add each
// user email to a new array
// Return the new array of emails.
//////////
// Test your function with this
// JSON data:
const jsonData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net"
  }
];

//////////////////
// HINT:
// The Higher Order Functions
// filter(), map(), and reduce()
// have inner functions that use
// a return statement.
// By putting HOFs inside of a
// function you create, you will
// also need to return the result
// of the HOFs.
/////////////////


// 2) Create a function named "onlyOdd".
// The function should accept a parameter
// named "numberArray".
// Use the higher order function filter()
// to create a new array that only contains
// the odd numbers.
// Return the new array.
/////////////
// Use this array to test your function:
const testingArray = [1, 2, 4, 17, 19, 20, 21];


// 3) Create a function named "makeThemOdd".
// The function should accept a parameter
// named "numberArray".
// Use the higher order function map()
// to create a new array that contains
// all the numbers from the original
// parameter array but adds 1 to each
// even number. The new array should
// only have odd numbers in it.
// Return the new array.
/////////////
// You can use the testing array from #2
// to test your function.


// 4) Create a function named "totalAll".
// The function should accept a parameter
// named "numberArray".
// Use the higher order function reduce()
// to return the total of all numbers
// in the parameter array.
/////////////
// You can use the testing array from #2
// to test your function.
