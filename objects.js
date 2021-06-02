
//object literal
var car={
    model:"BMW",
    yearOfManf:2000,
    color:'yellow',
    isOn:false,
    switchOn:function(){
        this.isOn=true;
    },
};

// data object
var Car={
    model:"BMW",
    yearOfManf:2000,
    color:'yellow',
    isOn:false
    
};

// instance is version of the object
// bmw , mercedes,...

var bmwCar=car;
bmwCar.model="bmW";


var car2=car;

console.log(car2.model);
car2.expiryDate='2/2/2020';

//var car2=Object.create(car);
car2.gerExpiryDate=function(){return "2-2-2012"};

console.log(car.expiryDate);
console.log(car.gerExpiryDate());

// utility objects like Math

var Car={
    switchOn(){},
    xyz:function(){}
    
};
