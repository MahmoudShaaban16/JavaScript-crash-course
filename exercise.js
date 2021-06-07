var arr=["20","140","300","50","10"];

var numArr=arr.map(function(e){return Number(e)});

console.log(numArr);


console.log(numArr.sort(function(e1,e2){
    return e1-e2
}));



