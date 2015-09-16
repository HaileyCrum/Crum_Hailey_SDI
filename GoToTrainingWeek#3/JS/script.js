
 /*
Hailey Crum
9/15/15
GoToWeek#3
 */

//alert("Testing to see if connected.");

 //Create an array of fruit names and then sort it

 //Array = variable that holds multiple variables
 //Index # of an array always starts with 0!!

 var bowlOfFruit = ["apple", "banana", "pear", "peach"];
//see whole array
 console.log(bowlOfFruit);

 //console.log the banana
 console.log(bowlOfFruit[1]);

 //How many items are in an array?
 //length property - access this by using dot syntax
 //fancy term for use a period
 console.log(bowlOfFruit.length);

 //Count the number of pears in our fruit bowl

 //Create a variable that will keep track of many pears
 //there are.
  var totalNumPears = 0;

//Test each item in the array and check if it is a pear

 //Basic structure of a conditional
 // if(conditional to test){Code that will run if true}

 //"7" == 7 boolean -true
 //"7" === 7 boolean - false
 //prompts always return strings!!

 if(bowlOfFruit[0]==="pear"){
     //This code will run if truee
     //Add 1 to the total numbers of pears
     console.log("this item is a pear!");
     totalNumPears++; //totalNumPears = totalNumPears + 1;
 } else{
     console.log("This fruit is not a pear!");
 }
