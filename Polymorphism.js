class Animal{
  speak(){
    console.log("Animals Makes Sounds");
  }
}
class Dog extends Animal{
  speak(){
    console.log("Dog breks");
  }
}
class Cat extends Animal{
  speak(){
    console.log("Cat meow");
  }
}
const animal=new Animal();
animal.speak();
const dog=new Dog();
dog.speak();
const cat=new Cat();
cat.speak();
//Example-2
console.log("------------");
class A{
  area(x,y){
    console.log(x*y);
    console.log(x+y);
    console.log(x-y);
    console.log(x%y);
  }
}
class B extends A{
  area(a,b){
    super.area(a,b);
    console.log('Class B');
  }
}
let value=new B();
let output=value.area(100,200);