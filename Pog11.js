console.log("----------------------");
console.log("Start");
setTimeout(()=>
  console.log("Inside setTimeout"),1000);
for(let i=0;i<1e9;i++){}
console.log("End");
console.log("----------------------");
//Priority
setTimeout(()=>
console.log("setTimeout"),0);
Promise.resolve().then(()=>
console.log("Promise"));
console.log("End");
//callback
setTimeout(()=>{
  console.log("Step 1");
  setTimeout(()=>{
    console.log("Step 2");
    setTimeout(()=>{
      console.log("step 3");
    },1000);
  },1000);
},1000);