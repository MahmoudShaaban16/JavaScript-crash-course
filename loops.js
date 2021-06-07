

// for 

var arr=[20,30,4];
for(var index=0;index<arr.length;index++){

    //iteration logic
    var m1=arr[index]*2;

    console.log(m1);

}
/// for each
for(e of arr){
    console.log(e);
}

// does the job as the above for each statement
for(e in arr){
    console.log(arr[e]);
}


// objects 

var obj={name:'ali',age:20,address:'Cairo'};

for(attr in obj){

    //printing attributes of the object
    console.log(attr);
    //printing the values
    console.log(obj[attr]);
    console.log(obj.attr);
}

// we can not use for of with objects ; literals, constructor functions...


// while

var num=100;
while(num>=100){
    console.log(num);
    num--;
}
// executes at least once .. or more 
do{
    console.log(num);
    num++;
} while(num>100);

