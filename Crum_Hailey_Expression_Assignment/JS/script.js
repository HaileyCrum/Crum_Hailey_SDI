/*
Hailey Crum
Expression Assignment
09/10/2015
 */
//Alerting the user that I want to help them calculate how much it will cost to buy easter baskets for every student
alert("Hello, I am going to help you find out how much it will cost for all the students in school to get an easter basket.");

//Prompting the user how many students are in first grade and printing it out in the console
var firstGraders =prompt("How many first graders?");
console.log("Number of first graders :"+ firstGraders +".");

//Prompting the user how many students are in  second grade and printing it out in the console
var secondGraders =prompt("How many second graders?");
console.log("Number of second graders :"+ secondGraders +".");

//Prompting the user how many students are in third grade and printing it out in the console
var thirdGraders = prompt("How many third graders?");
console.log("Number of third graders :"+ thirdGraders +".");

//Prompting the user how many students are in fourth grade and printing it out in the console
var fourthGraders =prompt("How many fourth graders?");
console.log("Number of fourth graders :"+ fourthGraders +".");

//Prompting the user how many students are in fifth grade and printing it out in the console
var fifthGraders = prompt("How many fifth graders?");
console.log("Number of fifth graders :"+ fifthGraders +".");

//Prompting the user how many students are in sixth grade and printing it out in the console
var sixthGraders = prompt("How many sixth graders?");
console.log("Number of sixth graders :"+ sixthGraders +".");

//Prompting the user how many students are in seventh grade and printing it out in the console
var seventhGraders = prompt("How many seventh graders?");
console.log("Number of seventh graders :" + seventhGraders +".");

//Prompting the user how many students are in eighth grade and printing it out in the console
var eighthGraders = prompt("How many eigth graders?");
console.log("Number of eigth graders :"+ eighthGraders +".");

//Prompting the user how many students are in ninth grade and printing it out in the console
var ninthGraders = prompt("How many ninth graders?");
console.log("Number of ninth graders :"+ ninthGraders +".");

//Prompting the user how many students are in tenth grade and printing it out in the console
var tenthGraders =prompt("How many tenth graders?");
console.log("Number of tenth graders :"+ tenthGraders +".");

//Prompting the user how many students are in eleventh grade and printing it out in the console
var eleventhGraders = prompt("How many eleventh graders?");
console.log("Number of eleventh graders :"+ eleventhGraders +".");

//Prompting the user how many students are in twelfth grade and printing it out in the console
var twelfthGraders = prompt("How many twelth graders?");
console.log("Number of twelth graders :"+ twelfthGraders +".");

//finding the total number of students and printing the total to the console
var grades = [Number(firstGraders), Number(secondGraders), Number(thirdGraders), Number(fourthGraders), Number(fifthGraders), Number(sixthGraders), Number(seventhGraders), Number(eighthGraders), Number(ninthGraders), Number(tenthGraders), Number(eleventhGraders), Number(twelfthGraders)];
var totalStudents = grades[0] + grades[1] + grades[2] + grades[3] + grades[4] + grades[5] + grades[6] + grades[7] + grades[8] + grades[9] + grades[10] + grades[11];
console.log("You have "+ totalStudents +" total students.");

//Alerting the user how many students the have
alert("You have "+ totalStudents +" total students.");

//Promting the user how much they want to spend for each student and printing it out in the console
var perStudent = prompt("How much do you want to spend per person? Please do not use $.");
console.log("You want to spend $"+ perStudent +" per student.");

//Finding total spent and printing it out in the console
var totalSpent = totalStudents * perStudent;
console.log("You will spend a total of $" + totalSpent +" on your students Easter Baskets.");

//Alerting user how much the will spend on easter baskets
alert("You will spend a total of $" + totalSpent +" on Easter Baskets for your students.");


// It says to comment out test values I used 1 for all grades
//I copied this from the console
//1 script.js:11:Number of first graders: 1.   It shows the line that the console.log was on
//1 script.js:13:Number of second graders: 1.
//1 script.js:15:Number of third graders: 1.
//1 script.js:17:Number of fourth graders: 1.
//1 script.js:19:Number of fifth graders: 1.
//1 script.js:21:Number of sixth graders: 1.
//1 script.js:23:Number of seventh graders: 1.
//1 script.js:25:Number of eighth graders: 1.
//1 script.js:27:Number of ninth graders: 1.
//1 script.js:29:Number of tenth graders: 1.
//1 script.js:31:Number of eleventh graders: 1.
//1 script.js:33:Number of twelfth graders: 1.  all lines for grades were correct with 1
//You have 12 total students. script.js:38:1    there are 12 students so this is correct
//You want to spend $15 per student. script.js:45:1    $15 per Student so this is correct
//You will spend a total of $180 on your students Easter Baskets.   This is also correct