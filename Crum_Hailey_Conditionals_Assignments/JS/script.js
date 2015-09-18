
 /*
Hailey Crum
Conditionals Assignment
9/17/15
 */

 /*Alert("Hello, I'm gonna ask you 3 questions! Please answer them all.");

 var q1 = prompt("What is the month of your birthday?");
 var q2 = prompt("What is the date of your birthday?");


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

*/

// 1 USD = .7375 EUR
 //1 US Dollar equals 16.58 Mexican Peso
 //1 US Dollar equals 0.64 British Pound
 //1 US Dollar equals 0.96 Swiss Franc

 alert("Hello, I would like to help you convert currency.");

 var amount = prompt(" Please type your amount in Us Dollars. Without a '$' symbol.");
 var type = prompt("Now choose from one of these from the list: \n Euro \n Peso \n Pound \n Peso");
 var euro = .7375
 var peso = 16.58
 var pound = .64
 var franc = .96

 if(type ==="Euro" ^ type ==="euro"){
     var convertEuro = amount * euro;
     console.log("Your $"+ amount +" in US dollars is €"+ convertEuro +" in Euros.");
     alert("Your $"+ amount +" in US dollars is €"+ convertEuro +" in Euros.");
 } else if(type === "Peso" ^ type ==="peso"){
     var convertPeso = amount * peso;
     console.log("Your $"+ amount +" in US dollars is $"+ convertPeso +" in Pesos.");
     alert("Your $"+ amount +" in US dollars is $"+ convertPeso +" in Pesos.");
 } else if(type === "Pound" ^ type ==="pound"){
     var convertPound = amount * pound;
     console.log("Your $"+ amount +" in US dollars is "+ convertPound +" in Pounds.");
     alert("Your $"+ amount +" in US dollars is "+ convertPound +" in Pounds.");
 }else {
     var convertFranc = amount * franc;
     console.log("Your $"+ amount +" in US dollars is "+ convertFranc +" in Francs.");
     alert("Your $"+ amount +" in US dollars is "+ convertFranc +" in Francs.");
 }