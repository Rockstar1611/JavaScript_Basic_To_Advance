//Arrays
let a=[];
console.log(a);
let b=[10,20.432,32,44];
console.log(b);
//const values 
const a1=[34];
const a2=new Array(5)
console.log(a1);
console.log(a2);
//type check
let c=["html","Css","Js","Java"];
console.log(typeof c);
console.log(c);
//string value
console.log(c.toString());
let d=["MYsql","ReactJs","NodeJs","AnglarJs"];
//concated array
let concateArray=c.concat(d);
console.log("Concatenated Array: ",concateArray);
//array for each
let e=["HTML","CDS","MSER","TYUIKKFD","YTR@#$%"];
e.forEach(function myfunc(x){
  console.log(e);});
//array length
let f=["YTREW","YTRDFGHGV","&^%RT^","Y^YHGFRTYU"];
let len=a.length;
console.log("array Length: "+len);
//modifying
let g=["HGERTGH","%^&^TR$^Y","FR%^&*&TR","GFDFGHGF"];
console.log(g);
g[1]="Booststrap";
console.log(g);
//Accesing ele
x=["ERTHGFe","HTTHH","T$%TYT%H","T%#5345GFGH","GTRTGHGTRGre"];
console.log(x);
let fst=x[0];
console.log("first Item :"+fst);