
 /*
Hailey Crum
Functions Worksheet
9/24/15
 */

 /*
 Problem #1
 Circumfirence
  */
//Formula of Circumference : C = 2πr

 //alert their of intention
 alert("I would like to help you find the circumference of a circle.");
 //Prompt user for the radius
var radius = prompt("What is the radius of the cirle?");
 //define pi

 while(radius=== "" || isNaN(radius)) {
     //Reprompt the user
 } if(radius ===""){
         radius = prompt("Please do not leave blank. \n What is the radius of the circle?");
     }else if(isNaN(radius)){
         radius = prompt("Please only use numbers. \n What is the radius of the cirle?");
     }
//define pi
 var pi = 3.14;

 //Create Function
 var answer = function(radius,pi){
     var circumference = 2 *Number(pi) * Number(radius);
     //return value
     return circumference;
 }

 //Function Returned
var circle = answer(radius,pi);
 //Print to the console
 console.log("The circumference of the cirle is "+ circle +".")
alert("The circumference of the circle is "+ circle +".");




 /*
 Problem #2
 Stung
  */

 //alert the user of intention/ as creepy as it is!
alert("Hello, I am going to tell you how many bee stings can kill an animal.")
 //prompt the user of the animal of their choice's weight
 var weightOfAnimal = prompt("How much does your animal weigh\n please write a whole number?");
//Ask the user what animal they chose.
 var animal = prompt("What is you animal?");
 //this is how many beestings per pound
 var beeStings = 8.666666667;

 //create the function
 var numberOfStings = function(weightOfAnimal, beeStings) {
     var death = Number(weightOfAnimal) / Number(beeStings);
    //returned value
     return death;
 }
//Function returned
 var totalBeeStings = numberOfStings(weightOfAnimal, beeStings);
//print to console total bee stings
 console.log("It takes "+ totalBeeStings +" bee stings to kill "+ animal +".");
 //alert the user of the total bee stings
 alert("It takes "+ totalBeeStings +" bee stings to kill " + animal +".");