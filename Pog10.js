/* Itratives */
const array=['a','b','c','d']
const it=array[Symbol.iterator]()
for(let value of it){
  console.log(value)
}
//itrative Objects
let obj={
  data:[1,2,3],[Symbol.iterator](){
    let i=0;
    return{
      next:()=>({
        value:this.data[i],done:i++ >=
        this.data.length
      })
    };
  }
};
//functon generator exp-1
function* generate(){
  yield 'Hello';
  yield 'World';
  yield 'Done';
}
const generator = generate();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); //repeat
console.log(generator.next());
//Example-2
function*example(){
  console.log("Step-1");
  yield 1;
  console.log("Step-2");
  yield 2;
  console.log("Step-3");
  yield 3;
}
const gen=example();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//Infinate Sequance
function* InfinateSeq(){
  let i=0;
  while(true){
    yield i++;
  }
}
const Sequance=InfinateSeq();