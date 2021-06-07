var date=new Date();
console.log(date);

var oldDate=new Date(2010,10,1,2);
// year,month,day,time part of the date..
console.log(oldDate);


//short format
console.log(new Date("5/25/2009"));


//long date format
var dt=new Date("10 march 2012");
console.log(dt.getMonth());

// compare dates

var date1=new Date("2010-10-1");
var date2=new Date("2011-9-2");

var diff=date1-date2;

console.log((date1-date2))
console.log(diff);

var diffDate=new Date(diff);

var sec=diff/1000;
var min=sec/60;
var hours=min/60;
var day=hours/24;
console.log(day,hours,min,sec);
console.log(diffDate);


var dt2=new Date();
console.log(dt2.toString());
console.log(dt2.toDateString());

var d=new Date("24 march 2001");

console.log(d.toTimeString());








