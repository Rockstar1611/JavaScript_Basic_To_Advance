//closure inJs 
function outer(){
  let outVar="Im the outer scope!";
  function inner(){
    console.log(outVar);
    outVar="Updated"
  }
  return inner;
}
const closure=outer();
closure();
closure();
//function closer
function add(a){
  return function(b){
    return a+b;
  };
}
const addTwo=add(2);
console.log(addTwo(3));
console.log(addTwo(4));
console.log(addTwo(23));
console.log(addTwo(31));
console.log(addTwo(35));