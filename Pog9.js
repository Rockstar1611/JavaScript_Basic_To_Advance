//Higher order function
function fun(){
  console.log("Hello,World!");
}
function fun1(action){
  action();
  action();
  action();
}
fun1(fun);
//map
const n=[1,2,3,4,5,6];
const square=n.map((num)=>num*num);
console.log(square);
//filter
const a=[1,2,2,3,4,5,7,8,8,90];
const even=n.filter((num)=>num%2===0);
console.log(even);
//reduce
const b=[1,4,6,2,7,4,7,9,98,65];
const sum=n.reduce((acc,curr)=>acc+curr,0);
console.log(sum);
//forEach
const c=[1,33,54,65,6,43,24];
n.forEach((num)=>console.log(num*2));
//find
const d=[1,2,3,5,6,4,8,67,43];
const fEven=n.find((num)=>num%2===0);
console.log(fEven);
//some
const e=[1,32,43,56,65];
const hasNeg=n.some((num)=>num<0);
console.log(hasNeg);
//every
const f=[1,3,2,45,77,87,6,66,44,24,54];
const allPos=f.every((num)=>num>0);
console.log(allPos)