
 /*
Hailey Crum
Conditionals Worksheet
9/17/15
 */
//GROUP 1: Expressions with Conditionals
    //Celsius to Fahrenheit converter
 //Conversion Formula F = (C x 2) + 30
 //Conversion Formula (°F  -  32)  x  5/9 = °C
 //Tell the user that what you are going to do
 alert("Hello, I would like to help you convert you temperature to Fahrenheit or Celsius");

 //Ask the user what the Temperature is specifying that you want only the number
 var temp = prompt("Please enter you temperature. In number form.");

 //Ask the user whether they are Telling you in Fahrenheit or in Celsius
 //Tell them to use F or C
 var degree = prompt("Now tell me whether the temperature in stated in Fahrenheit or Celsius. Using F or C.");



 if(degree === "c" && "C"){
     //Conversion to fahrenheit
     var fahrenheit = (temp * 2) + 30;
     //Print to the Console "Your temperature in Fahrenheit is..."
     console.log("You temperature in fahrenheit is "+ fahrenheit +".");
     alert("You temperature in fahrenheit is "+ fahrenheit +".");
 }else{
     //Conversion to Celsius
     var Celsius = (temp - 32) * 5/9;
     //Print to the console "Your temperature in Celsius..."
     console.log("Your temperature in Celsius is " + Celsius +".");
     alert("Your temperature in Celsius is " + Celsius +".");
 }
 alert("DISCLAIMER:  Temperatures may be off by a few degrees.");


 //GROUP 2: Multiple Results
    //Grade Calculator

 //Group 3: Multiple Conditions
    //Movie Ticket Price

 alert("Hello, I'd like to help you determine how much your ticket price will be.");
//Define senior age
 var senior = 55;
 //define child age
 var child = 10;
 //prompt the user of the time of the movie.
 var timeOfMovie = prompt("What time is the movie you would like to see?");
 //ask user their age
 var age = prompt("How old are you?");

 if(senior<= age ^ age < child ^ timeOfMovie === 3 ^ timeOfMovie === 4 ^ timeOfMovie ===5){
     //define senior/matinee
     var seniorMatineeTicket = "$7.00";
    //Print to the console Your ticket will be...
     Console.log("Your Ticket Price is "+ seniorMatineeTicket +".");
    //alert the user Your ticket will be...
     alert("Your Ticket Price is "+ seniorMatineeTicket +".");

 }else{
     //define regular price
     var regPrice = "$12.00";
    //Print to the console Your Ticket Price will be...
     console.log("Your Ticket Price is "+ regPrice +".");
     //alert the user Your Ticket Price will be...
     alert("Your Ticket Price is "+ regPrice +".");

 }
