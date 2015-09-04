/*
Hailey Crum
SDI Section 01
GoTo Training Week #2
09-4-2015
 */

//alert("Test to see if connected.");

//Create an age Calculator

//Ask the user for their name
var name = prompt("Let's figure out how old you are!\n Please type in your Name.");
//Use the variable and say Hello
alert("Welcome" +name+"!");

//Ask the user what year they were born
var yearBorn = ("What year were you born?");

//Console.log the answer to check it
console.log(yearBorn);

//Calculate their age.

//We need to know the current year
//Hardcoded - means type in a specific value.
var currentYear = 2015;

//figure out age.
var age = currentYear - yearBorn;

//alert the user with their age
alert (name+"you are" +age+"years old.");