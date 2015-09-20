
 /*
Hailey Crum
GoToTraining Week #4
09/20/15
 */

//alert("Testing to see if connected!");

 //Create a file that will give us a random number between two numbers


//Ask the user for the minimun number
 var minNum =  prompt("Let's find a number between two numbers! \n  What is the minimun number?");

 //parse int the variable
// minNum= parseInt(minNum);

 while(minNum === "" || isNaN(minNum)){
     //Reprompt the user
     if(minNum ===""){
         minNum = prompt("Please do not leave blank. \n What is the minimun number?");
     }else if(isNaN(minNum)){
         minNum = prompt("Please only use numbers. \n What is the minimun number?");
        // minNum=parseInt(minNum);
     }
 }

 /*
 Basic Structure of a While loop

 //Declare a variable
 var num = prompt("Type in a number");
 while(condition to test){
    //Some sort of change to the variable in our condition to test.
    X++;

 }
  */

 //Prompt the user for max number
 var maxNum = prompt("What is the max number:");

//Validate directly after prompt.
while(maxNum===""|| isNaN(maxNum)){
    maxNum = prompt("Please do not use blank and only use numbers. \n What is the Max Number?");
}
 //What if I wanted to validate words
 //Ask a yes or no question

 var happy = prompt("Are you happy today?");
 happy = happy.toLowerCase();

 while(happy !="yes" && happy != "no" && happy != "maybe"){
     happy = prompt("Please only use Yes of no. \n Are you happy today?");

 }

 //Funtion call - "go button that runs the function
 //arguments go inside the function call ()
 //create a variable to CATCH the returned value
var returnedValue = randomizer(minNum, maxNum);

 console.log("You random number between "+ minNum +" and "+ maxNum +" is "+returnedValue  +". ");

//Create a function to calculate the random number
 //parameters go inside parentheses
 //Paremeter are temperary variables that can only acess the inside the fuction
 //They catch the arguments that are thrown into the function.
 //It makes the code more flexible
 //We DO NOT want to use the main code variable inside the functions.
 function randomizer(min, max){
    //Generate our random number
     var randomNumber =Math.round (Math.random()*(min-max)+Number(min));
     //console.log(randomNumber);

     //return the value to our main code
    return randomNumber;
 }



