function Person(first, last, age, gender){
    this.name={
        first, 
        last
    };
    this.age=age;
    this.gender=gender;
	
};


function Teacher(first, last, age, gender, subject){
    Person.call(this, first, last, age, gender);
    this.subject= subject;
};

var teacher = new Teacher("John","Wick", 28, "Male", "Physics")

teacher.name
//{first: "John", last: "Wick"}
teacher.name.first
//"John"


class Person{
    constructor(first, last, age, gender){
        this.name= {
            first,
            last
        };
        this.age= age;
        this.gender = gender;
    }
    greeting(){
        console.log(`Hi! I am ${this.name.first}`);
    };
    farewell(){
        console.log(`${this.name.first}, good bye!!`);
    };
}
var obj= new Person('Aravind', 'Emmadishetty', 23, 'Male')
obj.name
//{first: "Aravind", last: "Emmadishetty"}
obj.greeting()
//Hi! I am Aravind

class Teacher extends Person{
    constructor(first, last, age, gender, subject){
        super(first,last,age,gender);
        this.subject = subject;
    }
};
var obj2 = new Teacher('John', 'Wick',28,'Male','Physics')
obj2.farewell()
//John, good bye!!

