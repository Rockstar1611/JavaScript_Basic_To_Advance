class Animal{
  constructor(name,age,color){
    this.name=name;
    this.age=age;
    this.color=color;
  }
  setVlaues(){
    console.log("Animal Name is "+this.name+" age "+this.age+"years and it's color is "+this.color);
    
  }
  sound(){
    console.log("It sounds Meow Meow");
  }
}
let animal=new Animal("cat",2,"white");
animal.setVlaues();
animal.sound();