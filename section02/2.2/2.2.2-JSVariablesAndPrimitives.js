// create a constant variable called "name" that references a string
const name = "Vantino";
// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "Highly Performing";
// create a reassignable variable called "wage" that references a number
let wage = 100000;
// create a variable called "age" that references a number, should it be reassignable?
let age = 27;
// create a variable called "onlyChild" that references a boolean
const onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = true;
// print the types of two variables that reference two different data types (typeof)
console.log(typeof satisfied); // boolean
console.log(typeof wage); // number
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "music";
console.log(typeof favoriteThing); //string
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "the song by Adele";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 22;
console.log(typeof favoriteThing); // number
// Happy Birthday!
// Reassign "age" to a new value
age = 28;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 150000;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = false;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  "i am " +
    age +
    " years old" +
    "." +
    " my name is " +
    name +
    ", nice to meet you." +
    "!"
);
