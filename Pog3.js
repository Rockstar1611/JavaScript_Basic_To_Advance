/* Controle flow Statements */
// if-statement
const age=18;
if(age>=18){
  console.log("Your a Adult");
}
// if else statement
var marks=43;
if(marks>=50)
{
  console.log("Your are Pass");
}
else{
  console.log("Your are not-Pass");
}
//else if statement
let temp=25;
if(temp>30)
{
  console.log("It's hot");
}
else if(temp>=20)
{
  console.log("It's Warm");
}
else{
  console.log("It's Cold");
}
//Switch statement
let day=3;
switch(day)
{
  case 1:
    console.log("Today is a Monday");
    break;
  case 2:
    console.log("Today is a Tuesday");
    break;
  case 3:
    console.log("Today is a Wednesday");
    break;
  case 4:
    console.log("Today is a Thursday");
    break;
  case 5:
    console.log("Today is a Friday");
    break;
  case 6:
    console.log("Today is a Saturday");
    break;
  case 7:
    console.log("Today is a Sunday");
    break;
  default:
    console.log("Press the Valid key");
}
//conduction operation
let a=10;
console.log(a===5 ? "a is equal to 5":"a is not equal to 5");
//while loop
let n=1;
while(n<=5)
{
  console.log("Hello..JS"+n);
  n++;
}
//Do-While loop
let count=1;
do{
  console.log("DO-While_JS"+count);
  count++;
}
while(count<=8);