//Modular scope
const PI=3.14;
function add(a,b){
  return a+b;
}
module.exports={PI,add};

//Lexical scope
function outer(){
  let outerVar="I'm in the ouert scope!";
  function inner() {
    console.log(outerVar);
  }
  inner();
}
outer();
//Different scope
let c="This is c-value";
function fun()
{
  let d="This is d-value";
  console.log(d);
}
console.log(c);