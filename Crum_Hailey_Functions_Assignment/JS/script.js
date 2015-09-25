
 /*
Hailey Crum
Function Assignment
9/24/15
 */



 //alert the user of intention
 alert("Hello, I can help you find the area of a parallelogram.");
 //ask the user for the base
 var  base = prompt("What is the base of the parallelogram? \n Please enter numbers only.");

 //validate
 while(base=== "" || isNaN(base))
 if(base ===""){
     //Reprompt the user
  base = prompt("Please do not leave blank. \n What is the base of the parallelogram?");
 }else if(isNaN(base)) {
     base = prompt("Please only use numbers. \n What is the base of the parallelogram?");
 }

 //Ask the user for the height
 var height= prompt("What is the height of the parallelogram?");

  //validate
  while(height=== "" || isNaN(height)) {
      //Reprompt the user
      if (height === "") {
          height = prompt("Please do not leave blank. \n What is the height of the parallelogram?");
      } else if (isNaN(height)) {
          height = prompt("Please only use numbers. \n What is the height of the parallelogram?");
      }
  }
 //create the function
 var findArea= function( h ,b ) {
  var area = Number(h) * Number(b);
  //returned value
  return area;
 }
 //calling function
 var areaOfAParallelogram = findArea(height,base);
 //print to console total bee stings
 console.log("The area of the parallelogram is "+ areaOfAParallelogram+".");
 //alert the user of the total bee stings
 alert("The area of the parallelogram is "+ areaOfAParallelogram +".");

 /*
 First Attempt
 base = 20
 height = 30
 area = 600
 20*30=600
 Second Attempt
base = 80
height = 200
80*200 = 16000
Everthing is working correctly
  */
 //tell the user your intention
alert("Hello, I can help you find the area of a trapesoid.");
 //Ask the user for Top Base
 var base1= prompt("What is the bottom base of the trapesoid?");
 //validate
 while(base1=== "" || isNaN(base1)) {
     //Reprompt the user
     if (base1 === "") {
         base1 = prompt("Please do not leave blank. \n What is the bottom base of a Trapezoid?");
     } else if (isNaN(base1)) {
         base1 = prompt("Please only use numbers. \n What is the bottom base of a Trapezoid?");
     }
 }

   //Ask the user for the Bottom Base
 var base2 = prompt("What is the top base of the trapezoid?")
   //validate
while(base2=== "" || isNaN(base2)) {
    //Reprompt the user
    if (base2 === "") {
        base2 = prompt("Please do not leave blank. \n What is the top base of the Trapezoid?");
    } else if (isNaN(base2)) {
        base2 = prompt("Please only use numbers. \n What is the top base of the Trapezoid?");
    }
}
        var heightOfTrapesoid = prompt("What is the height of a trapezoid?");

        while (heightOfTrapesoid === "" || isNaN(heightOfTrapesoid)) {
            //Reprompt the user
            if (heightOfTrapesoid === "") {
                heightOfTrapesoid = prompt("Please do not leave blank. \n What is the top height of the Trapezoid?");
            } else if (isNaN(heightOfTrapesoid)) {
                heightOfTrapesoid = prompt("Please only use numbers. \n What is the height of the Trapezoid?");
            }
        }
 //calling on the function
        var areaOfATrapezoid = trapezoid(heightOfTrapesoid, base1, base2);

        console.log("The area of the trapezoid is "+ areaOfATrapezoid + ".");
        alert("The area of the trapezoid is "+ areaOfATrapezoid +".");
//create function
        function trapezoid(h, b1, b2) {
            var traparea = Number(h) / 2 * (Number(b1) * Number(b2));
           // console.log(traparea);
            //return the value to our main code
            return traparea;
        }

/*
Test one
base 1 = 15
base 2 = 12
height = 9
The area of the trapezoid is 810
Test two
base 1 = cat reprompted
base 1 =     reprompted
base 1 = 18
base 2 = dog reprompted
base 2 = 12
height = 8
are of trapezoid is 864

 */