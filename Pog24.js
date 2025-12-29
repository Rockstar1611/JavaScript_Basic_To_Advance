let myMap=new Map();
let anotherMap=new Map([
  ['name',"Ramesh"],['age',23],['city','Vijayavada'],['job','full-stack']]);
console.log(anotherMap);
//clean form
const myMap1=new Map();
myMap1.set('name','Rajesh');
myMap1.set('age',25);
myMap1.set(1,'one');
console.log(myMap1);
//get values
console.log(myMap1.get('name'));
console.log(myMap1.get('age'));
console.log(myMap1.get(1));
console.log(myMap1.get('invalidKey'));
//has key
console.log(myMap1.has('name'));
console.log(myMap1.has('address'));
console.log(myMap1.has(1));
//delete key
myMap1.delete('age');
console.log(myMap1.has('age'));
console.log(myMap1);
//clear key
myMap1.clear();
console.log(myMap1);{}
console.log(myMap1.size);
myMap1.set('a',1);
myMap1.set('b',2);
console.log(myMap1.size);
console.log(myMap1);