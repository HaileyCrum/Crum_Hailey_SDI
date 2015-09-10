 /*
Hailey Crum
Expression Worksheet
09/09/2015
 */


//Sparky is 1 year old
//We need to find out how old sparky is in Dog years
 var age = 1;
 var dogYears = 7;

 //figure out their dogs age in dog years
var ageInDogYears = (age * dogYears);

 //print out age in dog years
 console.log("Sparky is " + ageInDogYears +" in dog year.");


 //Find out how many slices of pizza are there per person
 var slicesPerPizza = 8;
 var partyPeople = 20;
 var pizzas= 7;

//calulate how many pieces of pizza each person can get
var availableSlices = (pizzas * slicesPerPizza);
var slicesPerPerson =(availableSlices / partyPeople);

//print out how many pieces of pizza each person gets
console.log("Each party goer gets "+ slicesPerPerson +" slices.");

 //calculate how many left over pieces of pizza sparky gets
 //assuming people only get whole slices
 var wholeSlicesPerPerson = 2;
 var slicesGaveOut =(wholeSlicesPerPerson * partyPeople);
var sparkysPeices = (availableSlices - slicesGaveOut);


 //print out how many pizzas Sparky Gets
 console.log("Sparky gets "+sparkysPeices+" slices.");


 //Find out the average amount spent on groceries the past five weeks
 var weeklyGroceries =[303, 285, 400, 357, 299];
 var totalSpent = weeklyGroceries[0] + weeklyGroceries[1] + weeklyGroceries[2] + weeklyGroceries[3] + weeklyGroceries[4];


//figure out the average spent
 var averageSpent =(totalSpent / 5);


//print out total spent and average spent
 console.log("You have spent a total of "+ totalSpent +" in the past five weeks.This is an average of "+ averageSpent +" per week.");



//Find price of item with and without sales tax
 //Macbook Pro (Retina, 15 inch, 2.2 GHz Intel Core i7 Processor,
 // 16gb 1600mHz DDR3 memory, Intel Iris Pro 1536 MB)
 //sales tax = 6%
 //Price $2500
 var macBookPro = 2500;
 var salesTax = .06;
 var discount = .15;

 //Finding amount discounted
var amountDiscounted =(macBookPro * discount);


 //Find price with out sales tax
 var noTax =(macBookPro - amountDiscounted);


 //Find price with sales tax
 var tax = (noTax * salesTax);
 var taxedPrice =(noTax + tax);


 //print out price discounted price with tax and sales tax
 //“Your X was originally $X, but after a X% discount,
 // it is now $X without tax, and $X with tax.”
 console.log("Your MacBook Pro was originally $" + macBookPro +", 15% discount, it is now $"+ noTax +" without tax, and $"+ taxedPrice +" with tax.")






