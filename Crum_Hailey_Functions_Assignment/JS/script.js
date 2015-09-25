
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
 //Function returned
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
  */