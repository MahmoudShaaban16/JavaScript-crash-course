
var myArr=[4,"string",function(){console.log('hello')},{name:'ali'}];

var myArr2=new Array(3,4,6,"mahmoud");

console.log(typeof myArr);

myArr[0]=20;

console.log(myArr[0])
console.log(myArr[7]);
console.log(myArr.join(':'));

//adding to the beginning of the array

myArr.unshift('ahmed');
console.log(myArr.join(':'));
myArr.push(true);
console.log(myArr.join(':'));

var removedValue=myArr.pop();

var st="20";
console.log(Number(st))

//

var arr=[2,5,7,8];
var newArr=[];
//functional programming style..
arr.forEach(function(e){

    newArr.push(Math.pow(e,2));
    if(typeof e==Number){
        console.log(e);
    }

   
 
});

var result=arr.map(function(e){
    return Math.pow(e,2);
});

var evenNumbersArr=result.find(function(e){
return e%2==0;
});

console.log(evenNumbersArr);


//console.log(arr.sort().reverse());

//console.log(newArr);




