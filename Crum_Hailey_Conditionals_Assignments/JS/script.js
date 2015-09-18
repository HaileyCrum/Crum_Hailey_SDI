
 /*
Hailey Crum
Conditionals Assignment
9/17/15
 */

//Alert the user that you wanna ask them some questions
 alert("Hello,I would like to determine your Zodiac Sign. \n I'm gonna ask you 2 questions! \n Please answer the first one using a Month with Capital first letter. \n Please answer the second one with a number 1-31. \n Thank you!");
//Ask the user their birthday month
 var q1 = prompt("What is the month of your birthday?");
 //validate the prompt
 if(q1 === ""){
     //reprompt if false
     q1 = prompt("Please do not leave blank, What is the month of your birthday?");
 }
 //ask the user their birthday
 var q2 = prompt("What is the date of your birthday?");
 //validate if the answer was a number
 if(isNaN(q2)){
     //reprompt the user
     q2 = prompt("Please enter a number between 1-31.");
 }
 //assigning variable
 var capricorn;
 //assigning variable
 var aquarius;
 //assigning variable
 var pisces;
 //assigning variable
 var aries;
 //assigning variable
 var taurus;
 //assigning variable
 var gemini;
 //assigning variable
 var cancer;
 //assigning variable
 var leo;
 //assigning variable
 var virgo;
 //assigning variable
 var libra;
 //assigning variable
 var scorpio;
 // we don't end up needing this variable: var sagittarius;

 //Ternary coditional for variable
    capricorn = ( q1 === "January" && q2 <= 19 ^ q2 >= 20) ? (alert("You are a Capricorn!"),  console.log("You are a capricorn")) : (alert("You are an Aquarius!"), console.log("You are an Aquarius!"));

 //Alert the user of their Zodiac Sign
    alert(capricorn);
 //Ternary coditional for variable
    aquarius = (q1 === "February" && q2 <= 18 ^ q2 >= 19) ? "You are an Aquarius!" : "You are a Pisces!";
 //Print to the console users Zodiac Sign
    console.log(aquarius);
 //Ternary conditional for variable
    pisces = (q1 === "March" && q2 <= 20 ^ q2 >= 21) ? "You are a Pisces!" : "You an Aries";
 //Print to the console users Zodiac Sign
    console.log(pisces);
 //Ternary conditional for variable
    aries = (q1 === "April" && q2 <= 19 ^ q2 >= 20) ? "You are an Aries!" : "You are a Taurus!";
 //Print to the console users Zodiac Sign
    console.log(aries);
 //Ternary conditional for variable
    taurus = (q1 === "May" && q2 <= 20 ^ q2 >= 21) ? "You are a Taurus!": "You area Gemini!";
 //Print to the console users Zodiac Sign
    console.log(taurus);
 //Ternary conditional for variable
    gemini = (q1 === "June" && q2 <= 20^ q2 >= 21) ? "You are a Gemini!" : "You are a Cancer!";
 //Print to the console users Zodiac Sign
    console.log(gemini);
 //Ternary conditional for variable
    cancer = (q1 === "July" && q2 <= 22 ^ q2 >= 23) ? "You are a Cancer!" : "You are a Leo!";
 //Print to the console users Zodiac Sign
    console.log(cancer);
 //Ternary conditional for variable
    leo = (q1 === "August" && q2 <= 22  ^ q2 >= 23 ) ? "You are a leo!" : "You are a Virgo!";
 //Print to the console users Zodiac Sign
    console.log(leo);
// Ternary for conditional for variable
    virgo = (q1 === "September" && q2 <= 22 ^ q2 >= 23 ) ? "You are a virgo" : "You are a Libra!";
 //Print to the console users Zodiac Sign
    console.log(virgo);
 //Ternary conditional for variable
    libra = (q1 === "October" && q2 <= 22 ^ q2 >= 23) ? "You are a Libra!" : "You are a Scorpio!";
 //Print to the console users Zodiac Sign
    console.log(libra);
 //Ternary conditional for variable
    scorpio  = (q1 === "November" && q2 <= 21 ^ q2 >= 22) ? "You are a Scorpio!" : "You are a Sagittarius!";
 //Print to the console users Zodiac Sign
    console.log(scorpio);





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