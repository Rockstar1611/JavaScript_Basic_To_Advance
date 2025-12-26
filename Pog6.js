/* functions */
//understanding
function greet(name){
  console.log("Hello"+name);
}
greet1("shiva");
//default Parameters
function greet1(name="Geeta"){
  console.log("Hello, "+name);
}
greet1();
greet1("Sham");
//return function
function add(a,b){
  return a+b;
}
let result=add(5,654);
console.log("Addtion result: "+result);
/* Types Of Functions */
//Named fun
function greet2(){
  return "Hello!";
}
console.log(greet2());
//Anonymous fun
const greet3=function()
{
  return "Hi There!";
};
console.log(greet3());
//Function Expression
const add1=function(a,b){
  return a+b;
};
console.log(add1(2,3));
//Arrow fun
const square=n=> n*n;
console.log(square(36));
//callback fun
function num(n,callback){
  return callback(n);
}
const double=(n)=>n*2;
console.log(num(5,double));
//constructor fun
function Person(name,age)
{
  this.name=name;
  this.age=age;
}
const user=new Person("Neha",22);
console.log(user.name);
console.log(user.age);
//Async fun
async function fetchData()
{
  return "Data fetched.!";
}
fetchData().then(console.log);
//Generator fun
function* numbers()
{
  yield 1;
  yield 2;
  yield 3;
}
const gen=numbers();
console.log(gen.next().value);
console.log(gen.next().value);
//Recursive fun
function factorial(n){
  if(n===0)return 1;
  return n* factorial(n-1);
}
console.log(factorial(5));
//higer-oder func
function multiplyBy(factor){
  return function(num){
    return num*factor;
  };
}
const double1=multiplyBy(3);
console.log(double1(5));
//Nested fun
function outerFun(e){
  function innerFun(f){
    return e+f;
  }
  return innerFun;
}
const addTen=outerFun(10);
console.log(addTen(5));
//Pure func
function pureAdd(p,q){
  return p+q;
}
console.log(pureAdd(2,3));
//reset premeter func
function sum(...nums){
  return nums.reduce((k,l)=>k+l,0);
}
console.log(sum(1,2,3,4));