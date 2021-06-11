class Human{

    name;
    color;
    gender;
    energy=100;
    #birthDate;
    constructor(name,color,gender,relgion,birthDate){
        this.name=name;
        this.color=color;
        this.#birthDate=birthDate;
    }
setBirthDate(dt){
    this.#birthDate=dt;
}
    getName(){return this.name}

    static SayHello(){
        console.log("hello world");
    }

    work(){
        this.energy--;

    }

}
var mahmoud=new Human('mahmoud','red','male','muslim',new Date());
Human.SayHello();
//this throws an error, need to be handled through a function
//mahmoud.#birthDate=new Date("1986-12-6");
console.log(mahmoud.getName());


class Student extends Human{
    id;

    constructor(){
        super('ahmed');
        id=0;
    }
   
work(){
    super.work();
    this.energy-=60;
}
    

}


var student=new Student('ahmed','x','male');