const s1='12334';
const s2='Hello,12345s';
const s3='Hello,World!';
const strToNum1=Number(s1);
const strToNum2=Number(s2);
const strToNum3=Number(s3);
console.log(strToNum1);
console.log(strToNum2);
console.log(strToNum3);
console.log(typeof strToNum1);
console.log(typeof strToNum2);
console.log(typeof strToNum3);
console.log("----------------------------------");
//Methods
let x=21
console.log(x.toString());
console.log(x.toFixed(2));
console.log(x.toExponential(2));
console.log(x.toPrecision(2));
console.log(x.toLocaleString());
console.log(x.toLocaleString('en-US'));
console.log(x.toLocaleString('en-US',{style:'currency',currency:'USD'}));
console.log(x.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:2}));
console.log(x.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:2}));
console.log(x.toLocaleString("bn-BD"));
console.log("-----------------------");
//Strings
let s="HFEE";
console.log(s[0]);
console.log(s.length);
//reverse
let str="hello ,This ragannagari!!";
let reversedStr=str.split('').reverse().join('');
console.log(reversedStr);
//loop
let name="Ragannagari Sweety";
let revStr='';
for(let i=name.length-1;i>=0;i--){
  revStr +=name[i];
}
console.log(revStr);