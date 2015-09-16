
 /*
Hailey Crum
9/15/15
GoToWeek#3
 */

//alert("Testing to see if connected.");

 //Create an array of fruit names and then sort it

 //Array = variable that holds multiple variables
 //Index # of an array always starts with 0!!

 var bowlOfFruit = ["apple", "banana", "pear", "peach", "pear", "banana", "kiwi", "pear", "strawberry","pear"];
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
     //This code will run if true
     //Add 1 to the total numbers of pears
     console.log("this item is a pear!");
     totalNumPears++; //totalNumPears = totalNumPears + 1;
 } else{
     //This code will run if false
     console.log("This fruit is not a pear!");
 }

 if(bowlOfFruit[1]==="pear"){
     //This code will run if true
     //Add 1 to the total numbers of pears
     console.log("this item is a pear!");
     totalNumPears++; //totalNumPears = totalNumPears + 1;
 } else{
     //This code will run if false
     console.log("This fruit is not a pear!");
 }

 if(bowlOfFruit[2]==="pear"){
     //This code will run if true
     //Add 1 to the total numbers of pears
     console.log("this item is a pear!");
     totalNumPears++; //totalNumPears = totalNumPears + 1;
 } else{
     //This code will run if false
     console.log("This fruit is not a pear!");
 }
 if(bowlOfFruit[3]==="pear"){
     //This code will run if true
     //Add 1 to the total numbers of pears
     console.log("this item is a pear!");
     totalNumPears++; //totalNumPears = totalNumPears + 1;
 } else{
     //This code will run if false
     console.log("This fruit is not a pear!");
 }
 console.log("There are "+totalNumPears+" pear(s) in the fruit bowls!");

 //Create another variable to track pears
 var pearNumber = 0;

 //Create a loop for repetitive code

 //For loop structure
//for(initializing a counting variable; condition to test
// increment of change){ code to run for each time we loop}

 for(var i =0; i<bowlOfFruit.length; i++){
     console.log("Inside the loop, i ="+i);
     console.log(bowlOfFruit[i]);
     //Test if the array item is pear
     if(bowlOfFruit[i]==="pear"){
         console.log("Found a pear!");
             pearNumber++;
         } else{
            console.log("Fruit is not a pear!");
         }
     }


 console.log("The total number of pears in the bowl is "+pearNumber);


//validate prompts
 var name= prompt("What is your name?");
 //Test to see if the variable is blank
 if(name ===""){
     //The User left it blank
     //reprompt the user using the SAME variable
     name = prompt("Please do not leave blank.\n What is your name?");
 }

 var num1 = prompt("Please type in a number");

 //Test to see if it is a number

 //is NaN(it to test)
 console.log(isNaN("cat")); //true
 console.log(isNaN(7)); //returns false

 if(isNaN(num1)){
    //reprompt the user
     num1 = prompt("Please only use numbers. \n Type in a number.");

 }