

function getName(name){

}
// declaration
var getName2=function(name){

}

var getName3=(name)=>{
    console.log(name);
}

getName3('ali');

//expression bodies using arrow functions

var myArray=[20,430,40];

myArray.forEach(e=>{

    e++;
    console.log(e);

});

// this is the basic function use

myArray.forEach(function(e){
    e++;
    console.log(e);
})