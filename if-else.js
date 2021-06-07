

//instructions on data or variables..
var num=20;

if(num===20 || num%2 !=0)
{
    num--;

}


switch (num){
  case 20:num++;break;
  case 40:num--;break;
  default:num+=5;break;
}
var isSuccess=true;

console.log(num);

var y=null;
function calc(x,y){
    if(x!=undefined && y!=undefined && y!=null){
    return x+y;
    }
    else {return -1;}

}

console.log(calc(10,y));