
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