
var x = 10;
var engine=function(c,m,e){
    this.capcity=c;
    this.model=m;
    this.expiryDate=e;

}
// variable declarations to function
var Car = function (model,e, color,  year, isOn) {

    this.Engine=e;
    var x = 20;
    this.xyz = 10;
    //public
    this.model = model;
    this.color = color;
    this.isOn = isOn;
    //private
    var Model = "private";
    function swithOnEngine(){
        return 1+2;
    }
this.getModel=function(){
    return Model;
}
    this.setModel=function(m){
        console.log(Model);
        Model=m;
        return Model;
    }
    
    this.isSwitchedOn = function () {
        this.isOn = true;
        return this.isOn;
    }

    // fields private

}

var x=new Car(20);
//initialize engine 
x.Engine={capcity:3000,expiryDate:'1/1/2019'};
console.log(x.Engine);
x.Engine={capcity:3000,expiryDate:'1/1/2019'};
x.Engine=new engine('3000','toyota','');
x.Engine.capcity
console.log(x.Model);
x.model=20;
x.Car.Model=
console.log(x.Model);
//console.log(Car());

var bmwCar = new Car('bmw', 'red');
bmwCar.abc = 10;
///console.log(bmwCar.color);
var mercededCar = new Car('mercedes');
Car.prototype.expiryDate = "1-1-2000";
var myCar = new Car();
myCar.expiryDate = "1-1-2012";
bmwCar = myCar;
console.log(myCar.expiryDate);
// the same as :
console.log(bmwCar.expiryDate);


