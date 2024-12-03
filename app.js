class Person{
 constructor(name,age){
    this.name = name;
    this.age = age;
 }   
 talk(){
    console.log(`Hi, i am${this.name}`);
 }
}

let per1 = new Person("Saim",20);