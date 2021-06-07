var str="abACDaXy";


function getCapitalLetters(str){
    var outStr="";
    for(var index=0;index<str.length;index++){
        if(str.charCodeAt(index)>=65 && str.charCodeAt(index)<91){
          outStr=  outStr.concat(str[index]);
          //outStr=outStr+str[index];
        }
    }

    return outStr;
}



console.log(getCapitalLetters(str));