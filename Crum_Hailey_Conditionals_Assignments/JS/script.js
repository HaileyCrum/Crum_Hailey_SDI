
 /*
Hailey Crum
Conditionals Assignment
9/17/15
 */

 Alert("Hello, I'm gonna ask you 2 questions! Please answer them all.");

 var q1 = prompt("What is the month of your birthday?");
 if(q1 ===""){
     name = prompt("Please do not leave blank, What is the month of your birthday?")
 }
 var q2 = prompt("What is the date of your birthday?");
 console.log(isNaN(q1)); //true
 var false = console.log(isNaN(q2)); //returns false
 if(false === "false"){
     q1 = prompt("Please enter a number between 1-31.");
 }


if( q1 === "January" && q2 <= 19;){
    console.log("You are a capricorn");
    alert("");
} else if(){
    console.log("");
    alert("");
} else if(""){
     console.log("");
     alert("");
 }else if(""){
    console.log("");
    alert("");
} else{
    console.log("");
    alert("");
}

/*VALIDATING prompt
  if(name ===""){
  //The User left it blank
  //reprompt the user using the SAME variable
  name = prompt("Please do not leave blank.\n What is your name?");
  }
  VALIDATING NUMBERS
  var num1 = prompt("Please type in a number");

  //Test to see if it is a number

  //isNaN(it to test)
  console.log(isNaN("cat")); //true
  console.log(isNaN(7)); //returns false
*/

*/

// 1 USD = .7375 EUR
 //1 US Dollar equals 16.58 Mexican Peso
 //1 US Dollar equals 0.64 British Pound
 //1 US Dollar equals 0.96 Swiss Franc

 //alert the user that I would like to help convert currency
 alert("Hello, I would like to help you convert currency.");

//prompt the user of the amount they would like to convert
 var amount = prompt(" Please type your amount in Us Dollars. Without a '$' symbol.");
 //prompt the user what they want to convert to
 var type = prompt("Now choose from one of these from the list: \n Euro \n Peso \n Pound \n Peso");
 //defining euro
 var euro = .7375;
 //defining peso
 var peso = 16.58;
//defining pound
 var pound = .64;
 //defining franc
 var franc = .96;

 if(type ==="Euro" ^ type ==="euro"){
     //converting to Euro
     var convertEuro = amount * euro;
     //print out to the console the conversion
     console.log("Your $"+ amount +" in US dollars is €"+ convertEuro +" in Euros.");
     //alerting the user of the conversion
     alert("Your $"+ amount +" in US dollars is €"+ convertEuro +" in Euros.");
 } else if(type === "Peso" ^ type ==="peso"){
     //converting to Peso
     var convertPeso = amount * peso;
     //print out to the console the conversion
     console.log("Your $"+ amount +" in US dollars is $"+ convertPeso +" in Pesos.");
     //alerting the user of the conversion
     alert("Your $"+ amount +" in US dollars is $"+ convertPeso +" in Pesos.");
 } else if(type === "Pound" ^ type ==="pound"){
     //Converting to Pound
     var convertPound = amount * pound;
     //print out to the console the conversion
     console.log("Your $"+ amount +" in US dollars is £"+ convertPound +" in Pounds.");
     //alerting the user of the conversion
     alert("Your $"+ amount +" in US dollars is £"+ convertPound +" in Pounds.");
 }else {
     //Converting to Franc
     var convertFranc = amount * franc;
     //print out to the console the conversion
     console.log("Your $"+ amount +" in US dollars is ₣"+ convertFranc +" in Francs.");
     //alerting the user of the conversion
     alert("Your $"+ amount +" in US dollars is ₣"+ convertFranc +" in Francs.");
 }