
//variables

// calculate average for numbers 1,2,3

var x=1,y=2,z=3;

console.log(calculateAvg(x,y,z));
console.log(calculateAvg(1,2));
function calculateAvg(x,y,z){
  // check if x, y,z have values before applying any calculations
 // do something x

 //do something y

 var avg=(x+y+z)/3;
 var multip=(x+y+z)*2;
return {avg,multip};

 
}


//access function 

var avg=calculateAvg(1,2,3);

// variables x,y,z

//calculate average for numbers 4,6,8