// using arugments array

function sum(x,y,z){
    var sum=0;
    for(var param of arguments){
        sum+=param;
    }
    return sum;
}

console.log(sum(10,1,2,4,5));


// using the rest parameter

function sumV2(x,...numbers){
    console.log("numbers length",numbers.length);
    var sum=0;
    if(x!=undefined)
    sum=x;
    numbers.forEach(n=>sum+=n);
    return sum

}

console.log(sumV2(1));
console.log(sumV2());
console.log(sumV2(1,2));


/// spread

function add(x,y){
    return x+y;
}

add(1,2);

var params=[3,5,7,8];
console.log('add using spread operator',add(...params));

