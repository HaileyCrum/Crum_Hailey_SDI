/*
Hailey Crum
Expression Assignment
09/10/2015
 */
//Alerting the user that I want to help them calculate how much it will cost to buy easter baskets for every student
alert("Hello, I am going to help you find out how much it will cost for all the students in school to get an easter basket.");

//Prompting the user how many students are in each grade and printing it out in the console
var firstGraders =prompt("How many first graders?");
console.log(firstGraders);
var secondGraders =prompt("How many second graders?");
console.log(secondGraders);
var thirdGraders = prompt("How many third graders?");
console.log(thirdGraders);
var fourthGraders =prompt("How many fourth graders?");
console.log(fourthGraders);
var fifthGraders = prompt("How many fifth graders?");
console.log(fifthGraders);
var sixthGraders = prompt("How many sixth graders?");
console.log(sixthGraders);
var seventhGraders = prompt("How many seventh graders?");
console.log(seventhGraders);
var eigthGraders = prompt("How many eigth graders?");
console.log(eigthGraders);
var ninthGraders = prompt("How many ninth graders?");
console.log(ninthGraders);
var tenthGraders =prompt("How many tenth graders?");
console.log(tenthGraders);
var eleventhGraders = prompt("How many eleventh graders?");
console.log(eleventhGraders);
var twelthGraders = prompt("How many twelth graders?");
console.log(twelthGraders);

//finding the total number of students and printing the total to the console
var grades = [Number(firstGraders), Number(secondGraders), Number(thirdGraders), Number(fourthGraders), Number(fifthGraders), Number(sixthGraders), Number(seventhGraders), Number(eigthGraders), Number(ninthGraders), Number(tenthGraders), Number(eleventhGraders), Number(twelthGraders)];
var totalStudents = grades[0] + grades[1] + grades[2] + grades[3] + grades[4] + grades[5] + grades[6] + grades[7] + grades[8] + grades[9] + grades[10] + grades[11];
console.log("You have "+ totalStudents +" total students.");

//Alerting the user how many students the have
alert("You have "+ totalStudents +" total students.");

//Promting the user how much they want to spend for each student and printing it out in the console
var perStudent = prompt("How much do you want to spend per person?");
console.log("You want to spend $"+ perStudent +" per student.");

//Finding total spent and printing it out in the console
var totalSpent = totalStudents * perStudent;
console.log("You will spend a total of $" + totalSpent +" on your students Easter Baskets.");

//Alerting user how much the will spend on easter baskets
alert("You will spend a total of $" + totalSpent +" on Easter Baskets for your students.");


// It says to comment out test values I used 1 for all grades
//I copied this from the console
//1 script.js:11:1   It shows the line that the console.log was on
//1 script.js:13:1
//1 script.js:15:1
//1 script.js:17:1
//1 script.js:19:1
//1 script.js:21:1
//1 script.js:23:1
//1 script.js:25:1
//1 script.js:27:1
//1 script.js:29:1
//1 script.js:31:1
//1 script.js:33:1   all lines for grades were correct with 1
//You have 12 total students. script.js:38:1    there are 12 students so this is correct
//You want to spend $15 per student. script.js:45:1    $15 per Student so this is correct
//You will spend a total of $180 on your students Easter Baskets.   This is also correct