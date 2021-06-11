var firstName="Mahmoud";
var grade=40;

var obj={firstName,grade};
//console.log(obj.firstName);

var obj2={fullName:firstName,scope:grade};


// computed 

var propertyName="firstNameDynamic";

var obj3={[propertyName]:'ahmed'};
console.log(obj3.propertyName);

var obj4={};
for(i=0;i<5;i++){
obj4["Id"+i]=i;
}

console.log(obj4.Id1);


// functions shorthand

var myObj={getName(){return "my name"}, setName(name){return name;}}

myObj.getName();