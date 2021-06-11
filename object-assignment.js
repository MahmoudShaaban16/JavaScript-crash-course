

var student={name:'ahmed',age:30};
var studetCourse={courses:["math","english"]};
var school={};
var school=Object.assign(school,student,studetCourse);


console.log(school.name);
school.courses.forEach(function(course) {
    console.log(course);
});

